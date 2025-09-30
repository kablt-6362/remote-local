import React from "react";
import LoginStatus from "./LoginStatus";

export default function Container() {
  return (
    <div>
      {/* 첫 번째 컴포넌트에는 isLogin 속성에 true */}
      {/* userName 속성에 "홍길동 전달" */}
      <LoginStatus isLogin={true} userName="홍길동"></LoginStatus>
      {/* 두 번째 컴포넌트에는 isLogin 속성에 false */}
      {/* userName 속성에 "김철수 전달" */}
      <LoginStatus isLogin={false} userName="김철수"></LoginStatus>
    </div>
  );
}
