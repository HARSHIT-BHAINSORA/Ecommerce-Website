import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71hHxMf4KVL._SX3000_.jpg"
          alt=""
        ></img>

        <div className="home__row">
          <Product title="" image="" price="" rating="" />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
