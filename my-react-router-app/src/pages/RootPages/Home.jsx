import React from "react";
// a태그를 대체하는 Link 컴포넌트
import { Link } from "react-router-dom";
// 링크태그는 내부의 이동, 외부사이트 이동은 a태그 사용
export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">홈</h1>
      {/* to : 어던 주소로 이동할것인지? */}
      <Link to="/">홈</Link>
      <br />
      <Link to="/about">소개</Link>
      <br />
      <Link to="/profile">사용자정보</Link>
    </div>
  );
}
