// 예외처리
// try 코드 블럭
//원래 실행할 코드
try {
  //오류가 발생할만한 코드
  const arr = [1, 2, 3];
  arr = "배열";
  console.log(arr);
} catch (error) {
  // catch 코드 블럭
  //try코드 블록이 오류가 발생할 떄
  //실행할 코드
  //error 매개변수
  //오류의 정보를 저장하는 객체
  console.log(error.name);
  console.log(error.message);
} finally {
  // finally 코드 블럭
  //try~catcj와 상관없이
  //무조건 실행되는코드
  //return에 의해 위에서 함수가 종료되어도 무조건 실행된다.
  console.log("무조건 실행되는 코드");
}

function errorFunction() {
  try {
    const arr = 1;
    arr = "달";
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  } finally {
    console.log("무조건 실행되는 코드3");
  }
}
errorFunction();
