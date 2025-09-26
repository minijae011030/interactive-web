import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
