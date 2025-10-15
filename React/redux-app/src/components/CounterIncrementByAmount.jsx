import React from "react";
// 사용자에게 값을 입력 받고,입력값 만큼 상태에 count 에 더하기를 한다
import { useState } from "react";
// 전역 상태를 변경하기 위해 필요한 두 가지 모듈
import { useDispatch } from "react-redux";
import { increamentByAmount } from "../store/counterSlice";

export default function CounterIncrementByAmount() {
  // 지역 상태 payload 목적: 사용자 입력 값 관리
  const [payload, setPaylod] = useState(0);
  const dispath = useDispatch();

  return (
    <div>
      <input
        type="number"
        value={payload}
        onChange={(e) => {
          setPaylod(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // 액션 생성자 함수의 인자 === payload(상태를 얼마나 변경할지 결정하는 값)
          dispath(increamentByAmount(payload));
        }}
      >
        증가
      </button>
    </div>
  );
}
