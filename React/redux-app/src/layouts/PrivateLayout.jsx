import React from "react";
// 이 레이아웃은 로그인 사용자만 접근 가능한 레이아웃이다

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  const token = useSelector((state) => state.auth.token);

  // token이 없으면, 즉 로그인을 안했으면 로그인 페이지로 이동
  if (!token) {
    return <Navigate to="/login" replace></Navigate>;
  } else {
    // 토큰이 있으면 중첩된 자식 컴포넌트 랜더링
    return <Outlet></Outlet>;
  }
}
