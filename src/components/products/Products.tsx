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
  const [limit, setLimit] = useState<number>(() => {
    const savedLimit = localStorage.getItem("productLimit");
    return savedLimit ? parseInt(savedLimit, 10) : 8;
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error, "Ma'lumotlarni yuklashda xatolik yuz berdi.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [limit]);

  const handleViewMore = () => {
    setLimit((prevLimit) => {
      const newLimit = prevLimit + 4;
      localStorage.setItem("productLimit", newLimit.toString());
      return newLimit;
    });
  };

  return (
    <div className="products-wrapper">
      <h1>новые поступления</h1>
      <p className="line"></p>
      <div className="products-wrapper-items">
        {products?.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>
      <button onClick={handleViewMore} className="viewBtn">
        View products
      </button>
    </div>
  );
};

export default memo(Products);
