import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>Priority Disney Princess</p>
        <p className="product__prices">
          <small>Rs</small>
          <strong>259.00</strong>
        </p>
        <div className="product__rating">⭐⭐⭐⭐</div>
      </div>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/91-lmBMI8-L._AC_UL450_SR450,320_.jpg"
        alt=""
      ></img>

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
