import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Protectedlayout() {
  const islogin = false;

  //로그인 상태가 false 라면
  // Nagate 컴포넌트로 auth/login으로 리다이렉트

  if (islogin === false) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
}
