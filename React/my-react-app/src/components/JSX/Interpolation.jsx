import React from "react";

export default function Interpolation() {
  const number = 10;

  function greet(name) {
    return (
      <p className="text-red-600 text-3xl font-bold">저는 {name} 입니다</p>
    );
  }
  return (
    <div>
      <p>{1 + 1}</p>
      <p>{3 * 5}</p>
      <p>{1 === 1}</p>
      <p>{1 > 2}</p>
      <p>{number}</p>
      <p>{greet("이순신")}</p>
    </div>
  );
}
