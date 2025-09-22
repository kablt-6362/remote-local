// 배열 고차 매서드는
// 배열의 반복문을 함수화

let numbers3 = [1, 2, 3, 4, 5];

// 인덱스 반복문의 문제
// 1. 조건식 실수
// 2. 인덱스를 통해서 원소에 접근
for (let index = 0; index < numbers3.length; index++) {}

//for...of
// 1. 조건식 x
// 2. 원소에 바로 직접 접근
// 문제점
/// 1. 내부 로직 관리의 어려움
for (let elements of numbers3) {
  //내부로직
}

// 배열 고차메서드
// 1. 문법이 간결.
// 2. 컬벡힘스러 빈벅직업을 유연하게 제어
//numbers3.forEach(콜백함수);

//각 원소에 +1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  //배열의 워소에 반복적으로 수행할 로직 코드
  console.log(element + 1);
});

console.log("----");
// 각 워소 중 2로 나눴을 때 나머지가 0인 원소만 출력해보세요.
numbers4.forEach((element) => {
  if (element % 2 === 0) {
    console.log(element);
  }
});

// ---
// map() 을 활용해서 원소 *2를 한 데이터를 모은 새로운 배열 생성
const newArr4 = numbers4.map((elements) => {
  return elements * 2;
});
console.log(newArr4);

// reduce()
// 배열의 누적을 반환
const numbers10 = [1, 2, 3, 4, 5];

const result10 = numbers10.reduce((accValue, currelement) => {
  //accValue : 이전 반복동안 반환된 값을 누적한 데이터
  //currelement: 현재 원소

  // 반환값들이 누적이 된다
  return accValue + 1;
});

console.log(result10);

// sort()
// 배열을 정렬하는 고차 매서드
// 원소를 2개씩 비교하여 정렬

const numbers11 = [2, 6, 1, 9, 7];

numbers11.sort((a, b) => {
  // 정렬 기준
  // 반환값이 양수라면 a가 뒤로 배치
  // 반환값이 음사라면 a가 앞으로 배치
  // 반환값이 0이라면 같다

  // 오름 차순 축약
  // return a-b

  // 내림차순 축약
  // return b-a
  // 오름 차숨
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  // 내림 차순
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
});

console.log(numbers11);
