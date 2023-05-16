import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CartStyling.css";
export const Cart = (props) => {
  const navigate = useNavigate();
  return (
    <div class="dropdownclass">
      <h1>Total Number of Items in cart : {props.result.length}</h1>

      <select>
        <option class="textAlign"> Select </option>
        {props.result.map((option) => (
          <option class="def" key={option.id} value={option.category}>
            {option.title}
          </option>
        ))}
      </select>
      <br />
      <br />
      <button onClick={() => navigate("../allCartItems", { replace: true })}>
        Show All Cart Items
      </button>
    </div>
  );
};
