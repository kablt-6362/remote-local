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
import PATHS from "../constant/paths";
import rootRouter from "./routes/rootRoutes";
import authRouter from "./routes/authroutes";
import NotFound from "../pages/RootPages/NotFound";

// 라우터 설정 생성
const router = createBrowserRouter([
  //스프레드 연산자로 경로 배열을 복사한다
  ...rootRouter,
  ...authRouter,
  {
    path: "*", // 별표 : 모든거에 매핑(일치)되는 특수 문자
    Component: NotFound,
  },
]);

export default router;
