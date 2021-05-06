import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../../data/navData";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="layer">
        <div className="container">
          <div className="topPart">
            <h2 className="logo">
              <a href="/">Shoebar</a>
            </h2>
            <ul className="nav-menu">
              {navData.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link
                    style={{ textDecoration: "none", color: "#fff" }}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bottomPart">
          <div className="slogan">
            <h3 className="text">Your home of quality shoes</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
