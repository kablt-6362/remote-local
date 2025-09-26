// 구조 분해 할당

const object = {
  name: "김철수",
  age: 20,
  name2: "김철수",
  age2: 20,
};

// 구조 분해 할당을 활용하지 않은 경우
// 속성을 개별 변수에 할당
let name = object.name;
let age = object.age;

// 구조 분해 할당을 활용하는
// 객체를 분해 할당 할 경우, 변수의 순서와 관계없이 객체의 속성과 동일한 이름의 변수로 할당
let { name2, age2 } = object;
console.log(name2);
console.log(age2);

const object2 = {
  id: 1,
  title: "갤럭시 99",
  description: "삼성-스마트폰",
  price: 9900,
};

let { title, price } = object2;
console.log(title);
console.log(price);

// 배열을 가지고 구조분해 할당
const array = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = array;

// 객체를 인자로 전달받는 함수

function func(object) {
  //구조분해 할당으로 변수의 속성 값들을 저장
  const { name, age } = object;
  console.log(`Hellow${name}, i'm ${age}`);
}

// 매개변수의 구조분해 할당을 활용
function func2({ name, age }) {
  console.log(`Hellow${name}, i'm ${age}`);
}
const user = {
  name: "짱구",
  age: 5,
};
// func2(user);

//옵셔널 체이닝
const object3 = {
  name: "홍길동형",
  address: {
    city: "서울",
  },
};
console.log(object3?.name); //홍길동형
console.log(object3?.address?.city); //서울
console.log(object3?.address?.local); //undefined

console.log(object3?.contact?.mail);//undefined
console.log(object3?.contact?.phone);//undefined
console.log(object?.contact);//undefined
