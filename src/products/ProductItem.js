import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductItem = (props) => {
  const navigate = useNavigate();
  return (
    <div class="inlineDisply">
      <nav>
        <ul>
          <li>
            <Link to={"/" + props.product.id + ""}>
              <img src={props.product.image} alt="new" width="200px" />
              <h1>{props.product.price}</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default ProductItem;
