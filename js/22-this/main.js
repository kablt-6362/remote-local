// this 키워드

//일반 함수에서의 this 키워드
// 전역(global) 객체를 나타낸다.(가리킨다,참조한다)
function func() {
  console.log("함수");
  console.log(this);
}
// fsunc();
// 중괄호로 표현되는 자료형
// 객체의 특징 : key - value 속성으로 구성
// 함수도 value가 될 수가 있음. 이러한 함수를 매서드라고 한다
//즉, 객체에 포함딘 함수는 매서드라고 한다
const obj = {
  name: "홍길동",
  age: 20,
  //함수명이 없다 -> 함수 표현식
  //속성의 ket가 func이고 , values는 함수
  func: function () {
    console.log(this);
    // 여기서 this는 객체 obj와 동일하다
  },
};
obj.func();

// 화살표 함수로 표현한 매서드는 함수 선억신(표현식,funcrion)키워드를 작동하는 방식이 다르다

const user2 = {
  name: "홍길동",
  age: 20,
  //화살표 함수로 매서드를 표현
  greet: () => {
    console.log(this);
  },
};
//function 으로 표현한 메서드 결과 :{ name: '홍길동', age: 20, func: [Function: func] }
//화살표 함수로 표현한 메서드 결과는 : {}빈객체
console.log(this); //함수가 아닌곳에서 실행한 this: {} 빈객체
user2.greet();

const user3 = {
  name: "고길동",
  age: 299,
  //화살표 함수로 매서드를 표현
  greet: function () {
    console.log(this);
    //function 키워드 메서드 내부의 화살표 함수의 this: 상위 스코프(가장가까운 function)의 this를 참조한다
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
};
user3.greet();
