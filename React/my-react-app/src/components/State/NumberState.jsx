import React from "react";
import { useState } from "react";

export default function NumberState() {
  const [numState, setNumState] = useState(0);
  const updateNumState = () => {
    let newNumber = numState + 1;
    setNumState(newNumber);
  };
  return (
    <div>
      <p>{numState}</p>
      <button
        onClick={() => {
          updateNumState();
        }}
      >
        카운트 증가
      </button>
    </div>
  );
}
