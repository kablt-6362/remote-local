import axios from "axios";

//도메인주소
const BASE_URL = `https://dummyjson.com`;

async function getALLProducts() {
  //해당 사이트에서 정보를 받아와서 res에 할당함
  const res = await axios.get(`${BASE_URL}/products`);
  //정보중 key값이 "data"인 것들만 data에 할당함
  const data = res["data"];

  console.log(data);
}

getALLProducts();
