import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "../store/authslice";

// 로그아웃 버튼
// 만약에 로그인을 한 상태라면 사용자 정보를 출력
// (정상적으로 로그인을 해을 떄) 사용자 정보는 전역 상태 token에 저장된 상황
export default function Profile() {
  const dispath = useDispatch();
  //전역상태 token
  //토큰값을 변수 token에 할당
  const token = useSelector((state) => state.auth.token);

  // 로그인 검증 로직
  // 사용자 정보 관리 상태
  const [decodeToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // 토큰이 있다 => 로그인을 한 상태
    if (token) {
      // 토큰 복화화 -> 사용자 정보 불러오가
      setDecodeToken(jwtDecode(token));
    } else {
      // 로그인 상태가 아니면 사용자를 로그인 페이지로 보내기
      // navigate("/login");
    }
  }, [token]);
  function handleLogout() {
    // dispath함수로 logout 액션을 스토어에 보냄
    dispath(logout());
  }
  console.log(decodeToken);

  return (
    <div>
      <div>{token ? token : "로그인을 해주세요"}</div>
      <div>
        {decodeToken ? `이메일:${decodeToken.email}` : "로그인을 해주세요"}
      </div>
      <div>
        <button
          className="border-2"
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
