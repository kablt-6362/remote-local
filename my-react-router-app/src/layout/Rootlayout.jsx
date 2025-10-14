import React from "react";
import { Link } from "react-router-dom";
// Outlet 컴포넌트 불러오기
import { Outlet } from "react-router-dom";
import PATHS from "../constant/paths";

export default function Rootlayout() {
  return (
    <div>
      <div className="flex gap-4 p-2 border-2 border-gray-300">
        <Link to={PATHS.ROOt.INDEX}>홈페이지</Link>
        <Link to={PATHS.ROOt.ABOUT.ABOUT}>소개페이지</Link>
        <Link to={PATHS.ROOt.PROFILE}>사용자 정보 페이지</Link>
        <Link to={PATHS.Auth.INDEX}>인증 페이지로 이동</Link>
        <Link to={PATHS.ROOt.POSTS}>post 목록 페이지</Link>
      </div>
      {/*Outlet 캄포넌트 : 중첩된 자식 컴포넌트가 위치할 구멍  */}
      <Outlet />
    </div>
  );
}
