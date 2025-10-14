// RootLayout 과 RootLayout의 중첩된 페이지 경로 배열을 정리

import Home from "../../pages/RootPages/Home";
import About from "../../pages/RootPages/About";
import Profile from "../../pages/RootPages/Profile";
import PostListNew from "../../pages/RootPages/PostListNew";
import PATHS from "../../constant/paths";
import PostDetail from "../../pages/RootPages/PostDetail";
import Protectedlayout from "../../layout/Protectedlayout";
import Rootlayout from "../../layout/Rootlayout";

const rootRouter = [
  {
    path: PATHS.ROOt.INDEX,
    Component: Rootlayout,
    children: [
      {
        // 중첩할 자식 경로 객체를 정의하는 배열
        index: true, // index: true -> 부모경로의 기본 경로
        // 실제 완성되는 path= path: "/"  (부모경로와 동일)
        Component: Home,
      },
      {
        path: PATHS.ROOt.ABOUT,
        Component: About,
      },
      {
        path: PATHS.ROOt.POSTS,
        Component: PostListNew,
      },
      {
        path: PATHS.ROOt.POST_DETAIL,
        Component: PostDetail,
      },
      {
        //path 속성 x
        Component: Protectedlayout,
        //보호할 경로와 컴포넌트 정의
        children: [
          {
            path: PATHS.ROOt.PROFILE,
            Component: Profile,
          },
        ],
      },
    ],
  },
];

export default rootRouter;
