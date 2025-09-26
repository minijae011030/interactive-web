# React+Vite Template

React + Vite + TypeScript + TailwindCSS + shadcn/ui 스타터 템플릿

## ⚙️ Tech Stack & Versions

| Tech             | Version |
| ---------------- | ------- |
| React            | ^19.1.1 |
| Typescript       | ~5.8.3  |
| Vite             | ^7.1.7  |
| TailwindCSS      | ^3.4.17 |
| shadcn           | ^3.3.1  |
| React Router DOM | ^7.9.2  |

> 기타: class-variance-authority, tailwind-merge, clsx, lucide-react, tailwindcss-animate, Radix Primitives (@radix-ui/react-\*) 등 포함

## 🧰 사전 요구 사항

• Node.js LTS (권장)

• npm (또는 pnpm/yarn — 명령만 바꿔 사용)

## 🚀 시작하기 (초기 실행 방법)

### 1. 내려받기

#### 옵션 A — 템플릿으로 사용

1.  GitHub 저장소에서 Use this template 클릭 → 새 리포지토리 생성

2.  로컬로 클론:

```bash
git clone https://github.com/<your-id>/<your-repo>.git
cd <your-repo>
```

#### 옵션 B — 직접 클론

```bash
git clone https://github.com/<your-id>/react-template.git
cd react-template
```

### 2. 의존성 설치

```bash
npm i
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 프로덕션 빌드

```bash
npm run build
```

### 5. 빌드 미리보기

```bash
npm run preview
```

### 6. 코드 품질

```bash
npm run lint    # ESLint 체크
npm run format  # Prettier + Tailwind 클래스 자동 정렬
```

## 🗂️ 기본 구조

```plaintext
src/
├─ components/
│  └─ ui/                # shadcn 생성 컴포넌트들 (button, card, dialog 등)
├─ pages/                # 라우트 페이지들 (Home, About, Playground)
├─ router.tsx            # react-router-dom 라우터
├─ main.tsx              # 엔트리
└─ index.css             # Tailwind 엔트리
```

## ✨ 포함 사항

- **TailwindCSS**: 기본 컬러/라운드 확장, tailwindcss-animate 플러그인
- **shadcn/ui**: Radix 기반의 접근성 좋은 UI 컴포넌트
- **React Router**: 기본 라우팅 세팅
- **ESLint + Prettier**: prettier-plugin-tailwindcss로 클래스 자동 정렬
- **Vite**: 빠른 개발 서버 & 번들

## 📝 참고

- shadcn 컴포넌트 추가:

```bash
npx shadcn@latest add button card dialog input label textarea tabs separator sheet dropdown-menu
```

- 라우트 추가 시 src/pages에 컴포넌트 생성 → router.tsx에 경로 등록

## 📦 Version

현재 템플릿 버전: **v1.0.0**
