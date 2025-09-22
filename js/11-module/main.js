// 모듈을 불러오자
//import/from

//from : 어디서 불러올 것이냐
//import : 무엇을 불러올 것이냐
//import {함수명1,함수명2, ...} form ...

import { add, substract, multiply, devide } from "./math.js";

console.log(add(2, 4));
console.log(substract(55, 33));
console.log(multiply(6.5, 5.32));
console.log(devide(77, 3));

//하나만 불러오기
//내가 불러온 함수의 이름을
// 대표성을 뛴다는 특징

import calculator from "./calculator.js";
console.log(calculator);
console.log(calculator.add(1, 5));
console.log(calculator.substract(5, 2));
console.log(calculator.multiplyArrow(5, 6));
