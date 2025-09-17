//논리연산자
//논리형(블리언형, true.false)을 기반으로한 연산자
const trueData = true;
const falseData = false;

// && (ANd)
//2개의 논리형 데이터가 참이면 참(troe) 생성
//1개라도 논리형 데이터가 거짓이면 거짓(false) 생성

//탬플릿 리터럴에는 변수뿐만 아니라 표현식을 삽입 가능
//표현식: 데이터를 생성하는 코드
console.log(`true && true -> ${trueData && trueData}`);

//false && true 출력(log)
console.log(`false && true -> ${falseData && trueData}`);

//|| (OR)
//1개의 데이터라도 참이면 참(true) 생성
//2개의 논리형 데이테가 거짓이면(false) 생성
console.log(`true || false -> ${trueData || falseData}`);
console.log(`false || false-> ${falseData || falseData}`);

// ! (NOT)
//1개의 논리형 데이터만 필요
//논리형 데이터가 거짓이면 참(true) 생성
//논리형 데이터가 참이면 거짓(false) 생성
console.log(`!true->${!true}`);
console.log(`!false-> ${!false}`);

//같다 == VS === /다르다  != VS !==
// == / !=
//동등비교
//값(데이터)만 비교
//서로 다른 자료형을 비교하면 자료형을 도일하게 변환
//절대절대 사용 금지
const number = 1;
const str = "1";
const bool1 = number == str;
console.log(bool1); //true

// ===/ !==
//동등 비교
//데이터와 데이터의 자료형을 비교
const bool2 = number === str;
console.log(bool2);// false
