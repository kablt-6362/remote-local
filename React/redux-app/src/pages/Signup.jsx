import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// signup 액션: 회원가입 비동기 네트워크 처리 액션
// resetIssignup 액션 : isSign 상태 초기화(false) 액션
import { signUp, resetIsSingup } from "../store/authslice";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  // 사용자 입력 이메일 관리 상태
  const [email, setEmail] = useState("");
  // 사용자 입력 비밀번호 관리 상태
  const [password, setPassword] = useState("");
  //dispath 함수
  const dispatch = useDispatch();
  //navigate 함수
  const navigate = useNavigate();

  // 전역 상태 isSignup 불러오기
  const isSignup = useSelector((state) => state.auth.isSignup);
  // 전역 상태 error 불러오기
  const error = useSelector((state) => state.auth.error);

  function handleSubmit(e) {
    e.preventDefault();
    //비동기 처리 액션을 디스페치로 실행
    dispatch(signUp({ email: email, password: password }));
  }

  useEffect(() => {
    if (isSignup === true) {
      alert("회원가입을 성공했습니다. 메일함을 확인해주세요");
      dispatch(resetIsSingup);
      navigate("/Home");
    }
  }, [isSignup, dispatch]);

  // 회원가입 폼 구조
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
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
}
