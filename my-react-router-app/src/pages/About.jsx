import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="font-bold text-4xl">소개페이지</h1>
      <NavLink to="/">홈</NavLink>
      <br />
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "text-red-200 font-bold text-5xl" : "";
        }}
      >
        소개
      </NavLink>
      <br />
      <NavLink to="/profile">프로필</NavLink>
    </div>
  );
}
