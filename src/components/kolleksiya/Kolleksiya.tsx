import { memo } from "react";
import "./kolleksiya.css";

const Kolleksiya = () => {
  return (
    <section className="kolleksiya">
      <div className="kolleksiya-img"></div>
      <div className="kolleksiya-product">
        <h2>коллекция 2018</h2>
        <p className="line"></p>
        <p className="kolleksiya-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum
          ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis
          nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna
          consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
          facilisi habitasse ipsum interdum dictum aliquet. Velit quis
          ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra
          nulla nullam natoque volutpat curabitur auctor. Viverra viverra
          ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam
          egestas leo orci pharetra sed diam.
        </p>
        <button className="kolleksiya-btn">посмотреть коллекцию</button>
      </div>
    </section>
  );
};

export default memo(Kolleksiya);
