import { Fragment } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Sezon from "./components/sezon/Sezon";
import Kolleksiya from "./components/kolleksiya/Kolleksiya";
import Brand from "./components/brand/Brand";
import "./App.css";
import Products from "./components/products/Products";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Hero />
        <Sezon />
        <Kolleksiya />
        <Products />
        <Brand />
      </main>
    </Fragment>
  );
}

export default App;
