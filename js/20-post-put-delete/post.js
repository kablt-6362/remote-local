import axios from "axios";

async function addProduct() {
  const url = "https://dummyjson.com/products/add";
  const METHOD = "POST";
  //요청 본문body
  const body = {
    title: "피자",
    category: "junkFood",
  };
  //요청 헤더(header)
  //헤더: 요청의 부가 정보
  const header = {
    //요청 본문의 데이터 형식
    //application/json: json 확장자 데이터
    "Content-Type": "application/json",
  };
  const config = {
    url: url,
    method: METHOD,
    header: header,
    data: body,
  };
  //axios 로 API요청
  const response = await axios(config);
  const data = response["data"];
  console.log(data);
}
addProduct();
