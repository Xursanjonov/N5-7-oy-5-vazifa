import { memo } from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">PORTEN</h1>
        <p className="hero-text">санкт-петербург</p>
      </div>
      <p className="hero-dec">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum
        purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed
        iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus
        ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh
        magna feugiat id nunc, dui nisl viverra.
      </p>
    </section>
  );
};

export default memo(Hero);
