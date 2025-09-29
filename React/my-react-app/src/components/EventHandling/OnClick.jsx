import React from "react";

export default function OnClick() {
  function handleClick() {
    alert("클릭");
  }
  return (
    <div className="flex justify-center">
      <button
        className="border-4 bg-amber-200 max-w-5xl"
        onClick={() => {
          handleClick();
        }}
      >
        클릭버튼
      </button>
    </div>
  );
}
