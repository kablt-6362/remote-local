import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../store/counterSlice.js";

export default function CounterReset() {
  const dispath = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispath(reset());
        }}
      >
        초기화 버튼
      </button>
    </div>
  );
}
