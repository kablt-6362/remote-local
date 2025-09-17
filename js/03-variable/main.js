//변수에 데이터를 할당(assign O , save X )
//변수명 = 할당할 데이터
//"Hello World" 데이터를 저장한 공간의 이름이 message
//변수 message에 "Hello World"를 할당
message = "Hello World";

//= : 할당 연산자
console.log(message);
console.log(message);

//변수 message2 를 선언했다.
//선언과 할당은 분리 가능
message2 = "message2";

//선언의 방식 2게(원래는 3개)
// let
// 데이터의 재할당이 가능
//변수 message3에 "Hello Variable"을 할당
let message3 = "Hellw Variable";
console.log(message3);
//변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";
console.log(message3);
//let은 안붙이나요? -> let을 붙이면 선언
//let 키워드는 재선언은 불가능

//let 변수 message4를 선언
let message4;
//재선언은 불가능
//let message4; 아래에 또 쓰는거 불가능

// const
//데이터의 재할당이 불가능(상수)
//const 변수 message5 선언하고, "Hello Const"할당
const message5 = "Hello Const";
// message5 = "Hello Wordl"; 불가능

//let VS Const
//let : 변하는 데이터를 저장하는 변수 선언 방식
//Const : 변하면 안되는 데이터를 저장하는 변수 선언 방식

//대소문자 구분하기 떄문에 두변수는 다른 변수
let message6;
let MESSAGE6;

//카멜 케이스 사용 전
let hellomessage;

//카멜 케이스 사용 후
let helloMessage;

//의미 없는 변수명
let a = 1;

//의미 있는 변수명
let number1 = 1;

//템플릿 리터럴
//문자열 사이에 변수를 삽입해서 문자열을 생성하는 방법
//1. 문자열을 백틱으로 표현
//2. 변수 삽입 위치에 기호${} 를 사용

let name = "김재현";
let greet = `안녕하세요 ${name}입니다`;
console.log(greet);

// var
//재선언도 가능하고, 재할당도 가능
//재선언이 가능한게 좋지 않은 이유
//같은 이름으로 재선언을 해버리면 변수명이 중복 가능성
//기존 변수에 지정된 데이터가 의도치않게 삭제

//문자열 + 숫자 : 숫자사 string형으로 바뀐다