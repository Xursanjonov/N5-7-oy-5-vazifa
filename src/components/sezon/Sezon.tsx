import { memo, useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../products/ProductItem";
import "./sezon.css";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Sezon = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products?limit=3"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error, "Ma'lumotlarni yuklashda xatolik yuz berdi.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="sezon">
      <div className="sezon-product">
        <h2>СЕЗОН 2020/21</h2>
        <p className="line"></p>
        <div className="sezon-products-div">
          {products?.map((product) => (
            <ProductItem key={product?.id} product={product} />
          ))}
        </div>
        <button className="">View products</button>
      </div>
      <div className="sezon-img"></div>
    </section>
  );
};

export default memo(Sezon);
