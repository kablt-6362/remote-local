const key = "name";
const value = "jun";

const obj2 = {
  key: "홍길동", //key : "홀길동"
  value,
};
console.log(obj2);
const obj = {
  [key]: value,
};
console.log(obj);
// 계산된 속설명(key)
// 변수를 속성의 key 로 사용하고 싶을 떄 사용하는 문법
const user3 = {
  [key]: "홍당무", //name: "홍당무"
};
console.log(user3);
