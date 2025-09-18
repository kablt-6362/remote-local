// 반복문이 없는 코드
// 변수 number를 선언하고, 0을 할당
// 변수 number를 5번 출력
// 1씩 증가하면서
let number = 0; // 초기화

console.log(number); //반복 실행할 코드
number += 1; //증강식

console.log(number);
number += 1;

console.log(number);
number += 1;

//for(초기화문; 조건식; 증감문)
for (let number2 = 0; number2 < 3; number2 = number2 + 1) {
  console.log(number2);
}

//i++ => i= i+1

//숫자를 0번부터 5까지 출력
for (let i = 0; i < 6; i++) {
  console.log(`${i}번`);
}
