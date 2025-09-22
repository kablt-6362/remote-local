// 함수 선언식
function 함수명() {}

// 함수 표현식
// 함수명이 없고, 대신에
// 변수에 할당
const functionExpression = function () {};

// 화살표 함수
// 함수명이 없고, 대신에
// 변수에 할당.
const functionArray = () => {};

// 일급 객체
// 1. 변수에 할당이 가능하다.
// 2. 함수의 반환값으로 사용 가능하다

function calculator(operator) {
  if (operator === "더하기") {
    return (n1, n2) => {
      return n1 + n2;
    };
  }
  if (operator === "빼기") {
    return (n1, n2) => {
      return n1 - n2;
    };
  }
}
const add = calculator("더하기");
const sub = calculator("빼기");

console.log(add(1, 2));
console.log(sub(4, 2));

// 3.함수의 인자로 전달
function calculator2(operatorfunction, n1, n2) {
  const result = operatorfunction(n1, n2);
  console.log(`연산결과 : ${result}`);
}

//더하기 연산 함수
const add1 = (a, b) => {
  return a + b;
};
const sub1 = (a, b) => {
  return a - b;
};

calculator2(add1, 5, 3);


// 비유

function 파스타_만들기() {
  //어떤 면을 쓰고, 얼마나 삶을것이냐?
}


