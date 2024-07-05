import { memo, useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import "./products.css";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>("https://fakestoreapi.com/products?limit=8");
      setProducts(response.data);
    } catch (error) {
      console.log(error, "Ma'lumotlarni yuklashda xatolik yuz berdi.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-wrapper">
      <h1>новые поступления</h1>
      <p className="line"></p>
      <div className="products-wrapper-items">
        {products?.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default memo(Products);
