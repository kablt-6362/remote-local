import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return <Navigate to="/profile"></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}
