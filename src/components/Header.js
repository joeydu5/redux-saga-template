import React from "react";
import { useSelector } from "react-redux";
import Cart from "./shopping-cart-outline-svgrepo-com.svg";
import "./style.css";

const Header = () => {
  const result = useSelector((state) => state.cartReducer);
  return (
    <div className="header">
      <div>
        <span>{result.length}</span>
        <img src={Cart} alt="shopping cart" width="20" />
      </div>
    </div>
  );
};

export default Header;
