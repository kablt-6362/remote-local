import AuthHome from "../../pages/Authpages/AuthHome";
import Login from "../../pages/Authpages/Login";
import SignUp from "../../pages/Authpages/SignUp";
import PATHS from "../../constant/paths";
import AuthLayout from "../../layout/AuthLayout";

const authRouter = [
  {
    path: PATHS.Auth.INDEX,
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      {
        path: PATHS.Auth.SIGNUP,
        Component: SignUp,
      },
      {
        path: PATHS.Auth.LOGIN,
        Component: Login,
      },
    ],
  },
];

export default authRouter;
