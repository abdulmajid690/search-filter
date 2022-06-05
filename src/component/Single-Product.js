import React from "react";

// css
import "../style/style.css";

// react icons
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

const SingleProduct = ({ item }) => {
  const { id, title, image, price, category, description } = item;
  return (
    <div className="single-item" id={id}>
      <div className="wrapper">
        <div className="d-flex">
          <div className="favorite">
            <BiHeart className="heart-icon" />
          </div>
          <div className="btn-container">
            <button className="view-btn">
              <AiOutlineEye className="eye-icon" />
              <span className="text">Quick view</span>
            </button>
            <button className="cart-btn">
              <AiOutlineShoppingCart className="shopping-cart" />
              <span className="text">Quick shop</span>
            </button>
          </div>
        </div>
      </div>
      <div className="item-detail">
        <div className="img">
          <img src={image} alt={category} />
        </div>
        <div className="price-and-details">
          <h2>{title}</h2>
          <h3>{category}</h3>
          <h5>$ {price}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
