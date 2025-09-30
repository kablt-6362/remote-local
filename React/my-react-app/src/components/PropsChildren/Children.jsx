import React from "react";

// 매개변수 props(객체)에 객체의 구조 분해 할당을 적용
// const {children}= props;
export default function Children({ children }) {
  return <div>{children}</div>;
}
