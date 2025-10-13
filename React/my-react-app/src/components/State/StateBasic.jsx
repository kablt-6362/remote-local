import React from "react";
// 상태(state)를 사용하기 위한 모듈
import { useState } from "react";

// 리엑트 훅(Hook)
// JS 함수와 유사한 개념이지만 함수는 아니다
// 함수 : 특정 동작을 수행하는 코드 뭉치
// 훅 : 리엑트에서 특정 동작을 수행하는 도구
// useState 훅 : 리액트에서 상태 관리를 수행하는 도구
export default function StateBasic() {
  // useState 훅 사용
  // useState 훅은 배열[]을 생선한다
  // 배열[]에는 두개의 원소가 존재
  // [상태를 저장할 변수, 상태를 설정(변경)할 함수]
  const [somethingString, setStrings] = useState("어떠한문자");
  const [somethingAny, setAny] = useState("어떤것");

  // 배열의 구조 분해 할당을 활용
  // 문자열 데이터로 관리하는 상태(State)
  // String은 상태 데이터를 저장할 변수
  // setString은 상태 데이터를 변경하는 함수
  const [string, setString] = useState("문자열");
  //배열 데이터를 관리하는 상태

  //array 는 초기 데이터를 저장하는 변수
  //setArray는 상태를 변경하는 함수
  const [array, setArray] = useState([1, 2, 3]);
  let num = 4;
  function handleClick() {
    //새로운 배열데이터를 생성해서 변수 newArray에 할당했고
    const newArray = [...array, num];
    num = num + 1;
    //변수 newArray를 새로운 상태로 변경
    setArray(newArray);
  }
  return (
    <div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        원소 추가
      </button>
      {array.map((ele) => {
        return <li>{ele}</li>;
      })}
    </div>
  );
}
