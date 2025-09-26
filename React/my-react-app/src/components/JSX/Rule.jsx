import React from "react";

// export default : 모듈 내보내기
// function : 함수
// retur : 요소를 반환

// 파일 당 하나 존재하는 함수는 컴포넌트를 뜻하는데
// 컴포넌트 함수는 요소(Element)를 반환
export default function Rule() {
  // 규칙1. 하나의 태그만 반환한다.
  // div 테그 3개를 감싸는 1개의 Fragment 태그를 반환
  //   return (
  //       <div>1</div>
  //       <div>2</div>
  //       <div>3</div>
  //   );
  return (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      {/* 규칙2. 항상 모든 태그는 닫아주어야 한다 */}
      {/* <input> */}
      {/* input 태그의 self-closing */}
      <input />

      {/* 규칙3. 속성명(class,onclick,onsubmit)을 카멜 케이스로 작성해야한다 */}
      {/* 카멜케이스: 첫단어는 소문자, 이후 단어의 시작 글자를 대문자 */}
      {/* onclick->ocClick, onsubmit->onSubmi */}
      {/* class->className */}

      <p className="font-bold text-3xl text-red-700">p 태그{1 + 0}</p>
      {/* 큐칙4 : style속성의 값은 객체로 작성한다 */}
      <p style={{ fontSize: "3rem", color: "blue" }}>p 태그2 + 0</p>
    </>
  );
}
