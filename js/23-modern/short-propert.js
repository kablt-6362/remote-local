const name = "박길가메쉬";
const age = 20;

//변수명과 객체의 속성명이 같으면 {key:value}대신 {변수명}으로 축약하는 문법
//객체
const user = {
  name: name,
  age: age,
};
console.log(user);

// 단축 속성
// 변수명을 key로 사용할 떄
// 변수명과 key가 동일할 때
const user2 = {
  name,
  age,
  location: "3주",
};
console.log(user2);
