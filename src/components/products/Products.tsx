import { memo } from "react";
import ProductItem from "./ProductItem";
import "./products.css";

const Products = () => {
  return (
    <div className="products-wrapper">
      <h1>новые поступления</h1>
      <p className="line"></p>
      <div className="products-wrapper-items">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default memo(Products);
