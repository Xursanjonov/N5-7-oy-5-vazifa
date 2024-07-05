import { memo } from "react";
import "./sezon.css";
import ProductItem from "../products/ProductItem";

const Sezon = () => {
  return (
    <section className="sezon">
      <div className="sezon-product">
        <h2>СЕЗОН 2020/21</h2>
        <p className="line"></p>
        <div className="sezon-products-div">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
      <div className="sezon-img"></div>
    </section>
  );
};

export default memo(Sezon);
