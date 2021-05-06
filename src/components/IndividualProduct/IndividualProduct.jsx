import React from "react";
import "./individual.css";
const IndividualProduct = ({ product }) => {
  const { img, title, size, price } = product;
  return (
    <div className="product">
      <div className="productInfo">
        <img src={img} alt="" className="productImg" />
      </div>
      <div className="info-text">
        <h3 >
          {title} <span>{price}</span>
        </h3>
        <button className="btn-container ">ADD TO CART</button>
      </div>
    </div>
  );
};

export default IndividualProduct;
