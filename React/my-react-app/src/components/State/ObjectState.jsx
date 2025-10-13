import React from "react";
import { useState } from "react";

export default function ObjectState() {
  const [objState, setObjState] = useState({ age: 19, name: "홍길동" });
  const updateObjState = () => {
    let newObj = { ...objState, age: objState.age + 1 };
    setObjState(newObj);
  };
  return (
    <div>
      <p>
        {/* html태그에서 보간법으로 객체 접근시, 직접 접근이 안되므로 객체의 속성에 접근해야한다 */}
        {objState.age} - {objState.name}
      </p>
      <button
        onClick={() => {
          updateObjState();
        }}
      >
        객체변환 버튼
      </button>
    </div>
  );
}
