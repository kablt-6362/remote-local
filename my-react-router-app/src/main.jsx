import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// 라우터 설정 불러오가
import router from "./router";

//라우터의 설정을 애플리케이션에 적용할 컴포넌트(provider)
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
