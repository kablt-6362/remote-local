import React from "react";
import Card from "./Card";

export default function CardContainer() {
  function handleClick(user) {
    alert("함수발동!");
    console.log(
      `매개변수의 이름은 ${user.name}이고, 나이는 ${user.age}살 입니다`
    );
  }
  const user = {
    name: "홍길동",
    age: 22,
  };

  return (
    <div>
      <Card user={user} onClickProps={handleClick}></Card>
    </div>
  );
}
