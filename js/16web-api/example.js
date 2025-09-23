import axios from "axios";

//도메인주소
const BASE_URL = `https://dummyjson.com`;

/*
async function getALLProducts() {
  //해당 사이트에서 정보를 받아와서 res에 할당함
  const res = await axios.get(`${BASE_URL}/products`);
  //정보중 key값이 "data"인 것들만 data에 할당함
  const data = res["data"];

  console.log(data);
}
*/
// getALLProducts();

// 단일 상품 조회, n번상품 조회

async function getProductById(n) {
  //res변수에 id가 n인 것들의 정보를 res에 할당
  const res = await axios.get(`${BASE_URL}/products/${n}`);
  const data = res["data"];
  console.log(data);
}

// getProductById(1);
// getProductById(2);
// getProductById(10);

//특정 상품 조회
//특정 상품 변수 선언 queryParams; new URLSearchParams({ q: search })
//를 통해 매개변수를 특정상품으로 설정
async function searchProducts(search) {
  const queryParams = new URLSearchParams({ q: search });
  const res = await axios.get(`${BASE_URL}/products/search?${queryParams}`);
  const data = res["data"];
  console.log(data);
}

// searchProducts("phone");

//Products 객체 데이터 추출 하기

async function getALLProducts() {
  //해당 사이트에서 정보를 받아와서 res에 할당함
  const res = await axios.get(`${BASE_URL}/products`);
  //정보중 key값이 "data"인 것들만 data에 할당함
  const data = res["data"];

  console.log(Object.keys(data)); //key값만
  console.log(Object.entries(data)); //key + value
  return res;
}

// getALLProducts();

//모든 상품 목록에서 특정 속성 추출

//상품정보(products)추출
async function getProductsData() {
  const res = await axios.get(`${BASE_URL}/products`);
  const products = res["data"]["products"];
  console.log(products);
}
// getProductsData();

//상품 개수(total)추출
async function getProductTotalCount() {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  console.log(data["total"]);
}

// getProductTotalCount();

//특정 속성 추출

async function getProductProperty(propertyName) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const values = data["products"].map((product) => product[propertyName]);

  console.log(values);
}

// getProductProperty("title");
//prop 가 title,price,descripton을 어떻게 받는가
async function getProductPropertie(propertyNames) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const extractedData = data["products"].map((product) => {
    const result = {};

    propertyNames.forEach((prop) => {
      result[prop] = product[prop];
    });

    return result;
  });

  console.log(extractedData);
}

// getProductPropertie(["title", "price", "description"]);

//특정 속성이 특정값 미만으로 상품 추출

async function getFilteredProducts(propertyName, value) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const filteredProducts = data["products"].filter(
    (product) => product[propertyName] < value
  );
  console.log(filteredProducts);
}

getFilteredProducts("price", 10);


