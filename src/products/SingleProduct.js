import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from "mdb-react-ui-kit";
import { Cart } from "../cart/Cart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {cartReducer} from '../Redux-store/Reducers/'
import { addToCart } from "../Redux-store/Actions/Actions";

const SingleProduct = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addCartItem, setAddCartItem] = useState(false);

  const handleAddedToCart = (item) => {
    // console.log(item);
    dispatch(addToCart(item));
    alert("Succesfully added to the cart");
    setAddCartItem(true);
  };

  return (
    <div class="stylingproduct">
      <MDBCard>
        <MDBCardImage
          src={props.product.image}
          position="top"
          alt="new"
          width="150px"
          height="120px"
        />
        <MDBCardBody>
          <MDBCardTitle>Title:{props.product.title}</MDBCardTitle>
          <MDBCardText>Categoty:{props.product.category}</MDBCardText>
          <MDBCardText>Price:{props.product.price}</MDBCardText>
          <br />
          <button onClick={() => handleAddedToCart(props.product)}>
            Add to Cart
          </button>
          <br />
          <br />
          <button onClick={() => navigate("../cart", { replace: true })}>
            Go to Cart
          </button>
          <br />
          <br />
          <button onClick={() => navigate("../", { replace: true })}>
            Go Back
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
export default SingleProduct;
