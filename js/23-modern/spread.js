const obj1 = {
  name: "홍길동",
  age: 28,
  job: "개발자",
  location: "서울",
  cuntry: "대한민국",
};

//객체 복사
const obj2 = obj1;
obj2.location = "대구";
console.log(obj2);
console.log(obj1);
//...스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 }; //obj1의 속성을 펼쳐서 새로운 객체를 생성
obj3.name = "각시탈";
console.log(obj3);

//객체의 속성을 수정하면서 새로운 객체를 생성
// age속성을 수정한 새로운 객체를 생성
const obj4 = { ...obj1, age: 999, Color: "red", Planet: "Earth" }; //객체의 수정,추가 한줄로 가능
console.log(obj4);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1;
console.log(arr2);

//스프레드 연산자를 활용한 복사
//스프레드 연산자로 "새로운 배열"을 생성해서 arr3 할당
let arr3 = [...arr1, 3, 4, 7];
arr3[0] = -1;
console.log(arr3);

// 리액트에서는 스프레드 연산자를 어떻게 사용하는가?

// 객체를 저장한 배열
objectArr = [{ name: "철수", age: 20 }];
// 새로운 객체를 추가한 "새로운 배열"을 생성.
objectArr2 = [...objectArr, { name: "유리", age: 43 }];
objectArr.push({ name: "유리", age: 43 });
console.log(objectArr); //[ { name: '철수', age: 20 }, { name: '유리', age: 43 } ]
console.log(objectArr2); //[ { name: '철수', age: 20 }, { name: '유리', age: 43 } ] 두개의 출력값은 똑같지만, 해당값이 저장된 주소의 위치가 다르므로 둘은 서로 다른배열이다.
