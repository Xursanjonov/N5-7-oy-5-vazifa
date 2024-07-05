import { memo } from "react";
import cart from "../../assets/images/product-img.svg";
import "./products.css";

const ProductItem = () => {
  return (
    <div className="product-item">
      <img className="product-item-img" src={cart} alt="" />
      <h4>Louis XVI ATHOS</h4>
      <h5>165 000 руб.</h5>
    </div>
  );
};

export default memo(ProductItem);
