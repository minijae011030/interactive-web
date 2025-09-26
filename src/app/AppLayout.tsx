import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex gap-4 border-b border-white/15 bg-white/5 px-6 py-3">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
      </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
