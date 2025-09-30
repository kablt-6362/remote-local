import React from "react";

export default function AdminLink({ isAdmin }) {
  return (
    <div>
      <p>현재 권한 : {isAdmin === true ? "관리자" : "일반 사용자"}</p>
      {/* &&연산자를 활용 */}
      {/* isAdmin이 참이라면 <a>관리 페이지 이동</a>라는 요소를 화면에 표시 */}
      {isAdmin && (
        <a className="border-2 font-bold" href="https://naver.com">
          관리 페이지 이동
        </a>
      )}
    </div>
  );
}
