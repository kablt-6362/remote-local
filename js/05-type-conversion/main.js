// 형 변환
//명시적 형 변환 : 개발자가 한 것
//암시적 형 변환 : Js엔진(번역기)이 자동으로 한 것

//문자열로의 변환
//String() 함수 : 문자열로 변환하는 도구
//함수 : 프로그래밍 언어의 특정 기능을 수행하는 도구

//String(데이터) / String(변수)
console.log(String(123)); //숫자형->문자열
console.log(String(123) === " 123");

//true, undefined, null을 문자열로 형변환 코드 작성 + 출력까지~
console.log(String(true));
console.log(String(undefined));
console.log(String(null));

//숫자형 명시적 형 변환
//Number() 함수 : 숫자형으로 변환하는 도구
//문자열 "123"을 숫자형으로 변환해서 출력하는 코드 작성
console.log(Number("123"));

//만약, 숫자 형태가 아닌 문자열을 형변환한면?
//0~9 숫자인데 알파벳? 한글?
//1a2b
console.log(Number("1a2b")); //

//불리언 형변환
//블리언 데이터 : 맞다(true) / 틀리다(false)
//Boolean() 함수 : 불리언으로 형 변환하는 도구
console.log(Boolean("김재현"));

//불리언 형 변환 규칙
//각 자료형마다 최소 1개는 틀리다(false) 로 변환
//false 가 아닌 데이터는 모두 맞다(true)로 변환
// 숫자형 -> 불리언 형 변환
console.log(Boolean(0));//false 숫자 0만 false 값,나머지 숫자는 true

//문자형 -> 불리언 형 변환
//"" 안에 아무것도 없으면 false, " "안에 공백이든 뭐든 들어가 있으면 true
console.log(Boolean("")); // false

//암시적 불리언 형 변환
//불리언 데이터가 아닌 데이터에 대한 논리연산(&&,||!)

//0 --암시적 불리언형 변환 --> false --> not연산 --> true
console.log(!0);//tue
console.log(!"");//true

console.log(!1); //false
