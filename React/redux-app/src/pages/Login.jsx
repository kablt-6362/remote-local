import React from "react";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, resetIsSingup } from "../store/authslice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // 사용자 입력 이메일 관리 상태
  const [email, setEmail] = useState("");
  // 사용자 입력 비밀번호 관리 상태
  const [password, setPassword] = useState("");
  //dispath 함수
  const dispatch = useDispatch();
  //navigate 함수
  const navigate = useNavigate();

  //token 상태는 로그인을 성공하면 값이 존재
  // 로그인을 안했다면 값이 null
  const token = useSelector((state) => {
    return state.auth.token;
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  }
  useEffect(() => {
    if (token) {
      alert("로그인상태입니다");
      console.log(token);

      navigate("/");
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e); // form 기본 이벤트(동작) 막기
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}
