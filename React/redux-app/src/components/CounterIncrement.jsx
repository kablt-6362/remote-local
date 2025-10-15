import React from "react";
// counter전역 상태 count 의 값을 1 증가 시키는 버튼
// counterSlice에서 increment(상태 +1) 액션 생성자 함슈
// increment : 액션 생성자 함수 -> 액션을 생성자 함수
import { increment } from "../store/counterSlice";
// useDispatch() 훅 : dispath 함수를 생성하는 훅
// dispath 함수 : 액션(상태변경 요청서)를 스토어로 보내는 함수
import { useDispatch } from "react-redux";

export default function CounterIncrement() {
  // dispath 함수 생성
  const dispath = useDispatch();

  function clickHandler() {
    // const action = increment(); action 확인용 
    // console.log(action);
    //------------------------------------------
    // dispath 함수의 인자로 액션 생성자 인자를 전달
    dispath(increment());
  }
  return (
    <div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        1증가
      </button>
    </div>
  );
}
