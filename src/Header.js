// Header Component

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
        ></img>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello,Guest</span>

          <span className="header__optionLineSecond">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>

          <span className="header__optionLineSecond">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineSecond">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineSecond header__basketCount">
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
