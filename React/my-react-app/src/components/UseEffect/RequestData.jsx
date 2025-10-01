import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";

// 컴포넌트가 첫 랜더링 될떄 더미제이슨으로 데이터를 요청(axios)써서
export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response["data"];
      console.log(data);
      setProducts(data["products"]);
    }
    getProducts();
  }, []); // 빈 의존성 배열 : 컴포넌트가 첫 랜더링될 떄만 콜백 함수 실행
  return (
    <div>
      {/* products :배열 */}
      {/* map : 반복 매서드 */}
      {/* product : 반복되는 배열의 원소 */}
      {products.map((product) => {
        return <Product product={product}></Product>;
      })}
    </div>
  );
}
