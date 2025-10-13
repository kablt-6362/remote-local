// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 주소
// 라우터 : 주소(url)와 컴포넌트 매칭

import { createBrowserRouter } from "react-router-dom";
import Protectedlayout from "../layout/Protectedlayout";

// 레이아웃 컴포넌트 불러오기
import Rootlayout from "../layout/Rootlayout";
import AuthLayout from "../layout/AuthLayout";

// 페이지 컴포넌트 불러오기
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import Profile from "../pages/RootPages/Profile";
//authhome
import AuthHome from "../pages/Authpages/AuthHome";
import Login from "../pages/Authpages/Login";
import SignUp from "../pages/Authpages/SignUp";
// parama
import PostDetail from "../pages/RootPages/PostDetail";
import PostListNew from "../pages/RootPages/PostListNew";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        // 중첩할 자식 경로 객체를 정의하는 배열
        index: true, // index: true -> 부모경로의 기본 경로
        // 실제 완성되는 path= path: "/"  (부모경로와 동일)
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "posts",
        Component: PostListNew,
      },
      {
        path: "posts/:postId",
        Component: PostDetail,
      },
      {
        //path 속성 x
        Component: Protectedlayout,
        //보호할 경로와 컴포넌트 정의
        children: [
          {
            path: "profile",
            Component: Profile,
          },
        ],
      },
    ],
  },
  // auth 레이아웃
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);

export default router;
