import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const isLogin = true; // 로그인 상태표시

  // 로그인 상태가 아니라면
  // "/" 주소로 리다이렉트(홈으로)
  if (isLogin === false) {
    // Navigate 는 컴포넌트라서 return 내부에 있어야 한다.
    // replace 속성: history(사용자가 페이지를 이동한 내역)에 쌓이지 않는다
    return <Navigate to="/" replace />;
  }

  const naviate = useNavigate();

  return (
    <div>
      사용자정보
      <button
        className="border p-2"
        onClick={() => {
          alert("홈페이지로 이동합니다");
          // 페이지 이동 전특정 로직을 수행할 떄 사용
          naviate("/");
        }}
      >
        홈페이지로 이동
      </button>
    </div>
  );
}
