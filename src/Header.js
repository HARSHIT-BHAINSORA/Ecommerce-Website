// Header Component

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{ user , basket}] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }
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
      <Link to ={!user &&  "/login"}>  
        <div  onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello, {user ? user?.email : "Guest"}</span>

          <span className="header__optionLineSecond">{user ? "Sign Out" : "Sign In"} </span>
        </div>
      </Link>

      <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>

          <span className="header__optionLineSecond">& Orders</span>
        </div>

      </Link>
        
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineSecond">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineSecond header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
