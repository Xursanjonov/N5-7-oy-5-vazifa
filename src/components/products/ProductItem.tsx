import React, { memo } from "react";
import productImage from "../../assets/images/product-img.svg";
import "./products.css";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="product-item">
      <img
        className="product-item-img"
        src={productImage}
        alt={product?.title}
      />
      <h4>Louis XVI ATHOS</h4>
      <h5>{product?.price}pyб.</h5>
    </div>
  );
};

export default memo(ProductItem);
