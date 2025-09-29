import React from "react";

export default function OnChange() {
  // change 이벤트의 핸들러 함수 정의
  // 핸들러 함수 이름 규칙: handle이벤트명

  // 이벤트 핸들러의 event 객체: 이벤트 정보 저장한 객체
  function handleChange(event) {
    console.log(event);
    // 이벤트가 발생한 요소의 정보
    console.log(event["target"]);
    // 사용자가 입력한 입력값
    console.log(event["target"]["value"]);
  }
  function handleNumberChange(event) {
    // 사용자 입력 밗이 10보다 작으면
    //console.log(를 사용해서 "10보다 작은 수 "라고 출력)
    let userNum = event["target"]["value"];
    if (userNum < 10) {
      console.log("10보다 작은 수");
    } else {
      console.log("10보다큰수");
    }
  }

  return (
    <div>
      {/* 실습2 */}
      {/* onChange 이벤트 속성에서 이벤트 객체를 전달하면서 handleNumberChange 호출 */}
      {/* onChange 이벤트 속성 적용 */}
      <input
        type="Number"
        className="w-7xl border-2 bg-amber-400"
        onChange={(event) => {
          handleNumberChange(event);
        }}
      />
      <input
        type="text"
        // 이벤트 객체 event는 화살표 함수의 매개변수
        className="border-4 w-7xl"
        onChange={(event) => {
          // handleChange 함수 호출
          // event 인자는 그럼 어디서? 화살표 함수의 매개변수 event에서 가져온다
          handleChange(event);
        }}
      />
    </div>
  );
}
