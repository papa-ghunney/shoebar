import React from "react";
import "./products.css";
import { shoesData } from "../../data/shoesData";
const Products = () => {
  return (
    <section className="products-section" id="work">
      <h2 className="product__title">Featured Products</h2>
      <div className="underline"></div>
      <div className="products">
        {shoesData.filter((shoe, i)=> i < 6).map((shoe) => (
          <figure className="table" key={shoe.id}>
            <img className="portfolio__img" src={shoe.img} alt="sample70" />
            <figcaption>
              <h3>
                {shoe.title}
                <span>{shoe.price}</span>
                <button className="btn-container">Add to Cart</button>
              </h3>
            </figcaption>
            <a href="#"></a>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Products;
