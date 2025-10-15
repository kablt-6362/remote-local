import React from "react";
// 전역 상태를 불러와서 화면에 표시하는 컴포넌트

// useState와 유사한 전역 상태를 불러오는 훅
import { useSelector } from "react-redux";

import { useEffect } from "react";

export default function Counter() {
  // 전역 상태 불러오기
  const counter = useSelector((state) => state.counter);
  // 전역 상태 count
  const count = useSelector((state) => state.counter.count);
  useEffect(() => {
    console.log(counter);
  }, [count]);
  return <div>Counter:{count}</div>;
}
