import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div className="">
      {/* 데이터(Props)를 전달하는 방법 */}
      {/* Child 컴포넌트의 anme 속성과 age속성 */}
      {/* 문자열 속성은 따움표 사이에 넣고 */}
      {/* 숫자 속성은 중괄호 사이에 넣는다 */}
      <Child name="철수" age={17} />
      <Child name="영희" age={56} />
      <Child name="홍길동" age={999} />
    </div>
  );
}
