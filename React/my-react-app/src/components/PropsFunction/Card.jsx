import React from "react";

export default function Card({ user, onClickProps }) {
  return (
    <div>
      <button
        onClick={() => {
          onClickProps(user);
        }}
      >
        함수버튼
      </button>
   
    </div>
  );
}
