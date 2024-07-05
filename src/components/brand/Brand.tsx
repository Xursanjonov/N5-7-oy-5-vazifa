import { memo } from "react";
import brand from "../../assets/images/brand.svg";
import './brand.css'

const Brand = () => {
  return (
    <section className="brand">
      <h1>наши бренды</h1>
      <p className="line"></p>
      <div className="brand-images">
        <img width={200} src={brand} alt="" />
        <img width={200} src={brand} alt="" />
        <img width={200} src={brand} alt="" />
        <img width={200} src={brand} alt="" />
      </div>
    </section>
  );
};

export default memo(Brand);
