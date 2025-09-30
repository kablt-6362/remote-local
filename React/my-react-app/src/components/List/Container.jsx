import React from "react";
import User from "./User";

export default function Container() {
  const array = [1, 2, 3, 4, 5];

  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {userArray.map((userElement) => {
        // id 는 고유한(2개이상 존재하지않는) 속성
        // 반복의 대상이 되는 요소에 key 속성과 값을 설정을 해야한다
        // key에 설정되는 값은 고유한 값이어야 한다.
        // 반복 랜더링에서 key속성의 역할은
        // 동일하게 반복 생성된 컴포넌트를 구별(식별)하기위한 속성
        return <User key={userElement.id} user={userElement}></User>;
      })}
    </div>
  );
}
