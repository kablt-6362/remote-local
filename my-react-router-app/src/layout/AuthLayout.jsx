import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PATHS from "../constant/paths";

export default function AuthLayout() {
  //기본 css
  const baseClass = `border-2 border-amber-300 p-2`;
  // 활성화된 class
  const activaClass = `border-2 border-red-900`;

  return (
    <div>
      <div className="flex gap-2">
        {/* jsx보간법 + 템플릿 리터럴 + 화살표 함수 +삼항연산자 혼합 */}
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activaClass : ""}`
          }
          to={PATHS.Auth.INDEX}
        >
          인증 홈페이지
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activaClass : ""}`
          }
          to={PATHS.Auth.LOGIN}
        >
          인증 로그인
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activaClass : ""}`
          }
          to={PATHS.Auth.SIGNUP}
        >
          인증 회원가입
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activaClass : ""}`
          }
          to={PATHS.ROOt.INDEX}
        >
          홈페이지
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
