import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 주소
// 라우터 : 주소(url)와 컴포넌트 매칭

import { createBrowserRouter } from "react-router-dom";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/", //주소(url)
    Component: Home, //주소에 해당하는 컴포넌트
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);

export default router;
