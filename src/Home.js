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
          <Product
            id="1111"
            title="Priority Disney Princess Belle 25 litres Yellow & Pink Polyester School Bag | Casual Bags | for Girls, Kids Backpack (Fairy 007)"
            image="https://images-eu.ssl-images-amazon.com/images/I/91-lmBMI8-L._AC_UL450_SR450,320_.jpg"
            price={259.0}
            rating={5}
          />
          <Product
            id="1211"
            title="Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
            image="https://images-eu.ssl-images-amazon.com/images/I/81T4O-rEI+L._AC_UL450_SR450,320_.jpg"
            price={9990.0}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="2111"
            title="DENIMHOLIC Mens Cotton Front Open Cardigan Shrug"
            image="https://m.media-amazon.com/images/I/71BdAM9OHJL._AC_UL320_.jpg"
            price={349.0}
            rating={4}
          />
          <Product
            id="2112"
            title="MI Rechargeable Electric Toothbrush T100 with Dual Pro Mode & USB Fast Charging (White)"
            image="https://m.media-amazon.com/images/I/61R3a2YTMmS._AC_UL320_.jpg"
            price={699.0}
            rating={3}
          />
          <Product
            id="2113"
            title="METRO TOY'S & GIFT Cars 3 Theme Diecast Metal Toy Car Play Set for Kids Best Gifts Toys for Kids Boys - Set of 6, Multi color"
            image="https://m.media-amazon.com/images/I/51-FGI3Sr6L._AC_UL320_.jpg"
            price={459.0}
            rating={4}
          />
        </div>
        <div className="home__row"></div>
        <Product
          id="3111"
          title="AmazonBasics 81cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)"
          image="https://m.media-amazon.com/images/I/61zpVaJStWL._SL1254_.jpg"
          price={15999.0}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
