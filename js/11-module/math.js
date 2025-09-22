//  외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2;
}

//빼기
// substract
function substract(n1, n2) {
  return n1 - n2;
}

// 곱하기
//multiply
function multiply(n1, n2) {
  return n1 * n2;
}

// 나누기
// devide
function devide(n1, n2) {
  if (n2 === 0) {
    throw new Error("0으로 나눌수 없습니다");
  }
  return n1 / n2;
}

//상수도 내보낼수 있다.
const PI = 3.14;

//각 함수를 만들고 ,내보내기 및 불러오기

//함수 add 내보내기
// export{함수명1,함수명2,...}
export { add, substract, multiply, devide, PI };
