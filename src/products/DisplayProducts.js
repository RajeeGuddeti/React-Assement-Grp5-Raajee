import React from "react";
import { Outlet, Link } from "react-router-dom";
import react from "react";
import ProductItem from "./ProductItem";
import cart from "./cart.png";

const DisplayProducts = (props) => {
  return (
    <>
      <div class="Producs">
        <h2>Products Available:</h2>
        <div class="imagalign">
          <img src={require("./cart.png")} alt="cart" />
        </div>
        {props.data.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>

      {/* <Outlet /> */}
    </>
  );
};
export default DisplayProducts;
