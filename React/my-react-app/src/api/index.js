import axios from "axios";
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

// Creat(): axios 객체를 생성
// 객체 : 속성(key : value)로 구성된 자료형
const axiosInstance = axios.create({
  // axios 객체가  가질 속성의 정보
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },

  timeout: 5000,
});

// 응답 인터셉터 : 서버가 사용자에게 돌려주는 응답 데이터를 가로채서 추가 작업을 한다.
axiosInstance["interceptors"]["response"].use(
  // 2개의 함수 전달
  // 통신(요청-응답)이 성공했을 때
  (response) => {
    console.log("통신 성공 응답 인터셉터");
    // 응답 데이터 반환(return)
    // 서버의 실제 응답 데이터를 반환
    return response["data"];
  },
  //통신(요청-응답)이 실패 했을 때
  (error) => {
    if (error.response) {
      if (error.response === 401) {
        alert("인증에 문제가 있습니다.");
      } else if (error.response === 404) {
        alert("Not Found");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
