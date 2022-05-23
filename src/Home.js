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
            id="1"
            title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (White)"
            image="https://m.media-amazon.com/images/I/61AAiJ9LJ+L._AC_UY218_.jpg"
            price={4099.0}
            rating={5}
          />
          <Product
            id="2"
            title="Samsung Galaxy M53 5G (Mystique Green, 6GB, 128GB Storage) | Travel Adapter to be Purchased Separately"
            image="https://m.media-amazon.com/images/I/71MaDLgHnxL._AC_UY218_.jpg"
            price={26990.0}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="DENIMHOLIC Mens Cotton Front Open Cardigan Shrug"
            image="https://m.media-amazon.com/images/I/71BdAM9OHJL._AC_UL320_.jpg"
            price={349.0}
            rating={4}
          />
          <Product
            id="4"
            title="MI Rechargeable Electric Toothbrush T100 with Dual Pro Mode & USB Fast Charging (White)"
            image="https://m.media-amazon.com/images/I/61R3a2YTMmS._AC_UL320_.jpg"
            price={699.0}
            rating={3}
          />
          <Product
            id="5"
            title="Gauri Laxmi Enterprise Men's Cotton Blend Straight Kurta (Plain Yellow Kurta Only_Yellow)"
            image="https://m.media-amazon.com/images/I/511zO6yrqvS._AC_UL320_.jpg"
            price={299.0}
            rating={4}
          />
        </div>
        <div className="home__row"></div>
        <Product
          id="6"
          title="AmazonBasics 81cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)"
          image="https://m.media-amazon.com/images/I/61zpVaJStWL._SL1254_.jpg"
          price={15999.0}
          rating={4}
        />
      
        <div className="home__row">
          <Product
            id="7"
            title="AFEK Stylish Comfortable Casual Sport Running Shoes for Men {1-AFK-Sports}"
            image="https://m.media-amazon.com/images/I/41yosvEsOyL._UX575_.jpg"
            price={449.0}
            rating={4}
          />
          <Product
            id="8"
            title="Campus Sutra Men's Sport Jersey T-Shirt"
            image="https://m.media-amazon.com/images/I/41DUuY3ovPL._AC_UL320_.jpg"
            price={599.0}
            rating={5}
          />
          <Product
            id="9"
            title="KATWINGS High Heel Fsahion Sandal Women &Girls"
            image="https://m.media-amazon.com/images/I/617iBozUdvL._AC_UL320_.jpg"
            price={259.0}
            rating={5}
          />
          </div>

          <div className="home__row">
          <Product
            id="10"
            title="Janasya Women's Pink Pure Cotton Straight Kurta"
            image="https://m.media-amazon.com/images/I/71nrV1WJQhL._AC_UL320_.jpg"
            price={349.0}
            rating={3}
          />
          <Product
            id="11"
            title="boAt Airdopes 141 True Wireless Earbuds with 42H Playtime, Beast Mode"
            image="https://images-eu.ssl-images-amazon.com/images/I/31GUbeFG3FL._AC_SX184_.jpg"
            price={499.0}
            rating={5}
          />
          <Product
            id="12"
            title="ANNI DESIGNER Women's Khadi Silk Printed Saree With Blouse Piece"
            image="https://m.media-amazon.com/images/I/91zuOcKe0YL._AC_UL320_.jpg"
            price={259.0}
            rating={4}
          />
          <Product
            id="13"
            title="Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)"
            image="https://m.media-amazon.com/images/I/81tioCUVf4L._AC_UL320_.jpg"
            price={349.0}
            rating={3}
          />
          </div>

          <div className="home__row">
          <Product
            id="14"
            title="Litleo Set of 4 Mini Decorative, Home Office or Gift Wild Artificial Plant with Pot Green"
            image="https://m.media-amazon.com/images/I/81opj+B0fhL._AC_UL320_.jpg"
            price={299.0}
            rating={4}
          />
          <Product
            id="15"
            title="Yamaha FS100C Acoustic Guitar, Black"
            image="https://m.media-amazon.com/images/I/51c4Nh5YBEL._AC_UL320_.jpg"
            price={9990.0}
            rating={5}
          />
          <Product
            id="16"
            title="Vudy Engineered Wood Wall Shelves ,Glossy Finish ,Set Of 5,Black"
            image="https://m.media-amazon.com/images/I/81xH6f+l88L._AC_UL320_.jpg"
            price={1399.0}
            rating={4}
          />
          </div>
        </div>    
    </div>
  );
}

export default Home;
