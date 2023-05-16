import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Link,
  Outlet,
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Table from "../cart/Table";
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";
import { Cart } from "../cart/Cart";
import DisplayProducts from "./DisplayProducts";
import { AllCartItems } from "../cart/AllCartItems";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const result = useSelector((state) => {
    return state.cartItems;
  });
  useEffect(() => {}, [result]);

  React.useEffect(() => {
    async function getData() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        })

        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  return (
    // <div>
    //   <h1>Product List</h1>
    //   <ul>
    //     {products.map((product) => (
    //       <li key={product.id}>
    //         {product.id} {product.category} -
    //         <img src={product.image} alt="new" width="20px" />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayProducts data={products} />} />
          {products.map((product) => (
            // console.log("index","/"+index.id)
            <Route
              key={product}
              path={"/" + product.id + ""}
              element={<SingleProduct product={product} />}
            />
          ))}
          ;
          <Route path="/cart" element={<Cart result={result} />} />
          <Route
            path="/allCartItems"
            element={<AllCartItems result={result} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AllProducts;
