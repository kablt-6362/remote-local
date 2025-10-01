import React from "react";
import "./Product.css"; // CSS 파일 가져오기

// 개별 Product의 UI(컴포넌트)
// product : 개별 상품 정보를 저장하고 있는 객체 데이터
export default function Product({ product }) {
  return (
    <div className="product-card">
      <p className="product-title">{product.title}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
}
