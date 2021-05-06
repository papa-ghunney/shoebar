import React from "react";
import { useSelector } from "react-redux";
import IndividualProduct from "../components/IndividualProduct/IndividualProduct";
import Navbar from "../components/Navbar/Navbar";
import "./shop.css";
const Shop = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Shop</h2>
        <div className="underline"></div>
        <div className="productsList">
          {products?.map((product) => (
            <IndividualProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
