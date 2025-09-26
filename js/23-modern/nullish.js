// Nullish 병합 연산자

// 자료형 null은 개발자가 의도한 빈 데이터

// 자료형 unedfined는 개발자가 의도하지않은 빈 데이터

let value1; //undefined
let value2 = null; //null

// console.log(value1);
// console.log(value2);

//nullish는 데이턱 undefined 또는 null 이면 해당 데이터를 대체하는 기본값을 적용

let value3 = null ?? "기본값";
console.log(value3);
