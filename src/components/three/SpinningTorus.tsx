import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpinningTorus() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const el = mountRef.current;

    // Scene / Camera / Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0f1a, 0.12);

    const camera = new THREE.PerspectiveCamera(
      60,
      el.clientWidth / el.clientHeight,
      0.01,
      100,
    );
    camera.position.set(0, 0.3, 2.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.HemisphereLight(0xaaccff, 0x111122, 0.9));
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(3, 4, 2);
    scene.add(dir);

    // Mesh
    const geo = new THREE.TorusKnotGeometry(0.6, 0.22, 220, 28);
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#7fb3ff"),
      roughness: 0.25,
      metalness: 0.35,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Resize
    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Loop
    let raf = 0;
    const clock = new THREE.Clock();
    const loop = () => {
      const t = clock.getElapsedTime();
      camera.position.x = Math.sin(t * 0.2) * 2.1;
      camera.position.z = Math.cos(t * 0.2) * 2.1;
      camera.lookAt(0, 0, 0);

      mesh.rotation.y += 0.01;
      mesh.rotation.x += 0.003;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    loop();

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      scene.traverse((obj) => {
        const m = obj as THREE.Mesh;
        if (m.geometry) m.geometry.dispose?.();
        const mat = m.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((mm) => mm.dispose?.());
        else mat?.dispose?.();
      });
      renderer.dispose();
      renderer.forceContextLoss();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="h-[380px] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/20 sm:h-[460px]"
      ref={mountRef}
    />
  );
}
