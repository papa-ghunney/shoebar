import React from "react";
import "./navbar.css";
import cart from '../../images/cart.png'
import { Link } from "react-router-dom";
import { navData } from "../../data/navData";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo2">
        <a href="/">Shoebar</a>
      </h2>
      <ul className="nav-menu">
        {navData.map((item) => (
          <li key={item.id} className="nav-item">
            <Link
              style={{ textDecoration: "none", color: "#924040" }}
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="search-cart">
        <input type="text" placeholder="Search" />
       <img className="cart" src={cart} alt=""/>
      </div>
    </div>
  );
};

export default Navbar;
