// import { ADD_TO_CART } from "../Actions/Actions";

const initialState = {
  cartItems: []
};
const cartReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
      return newItem;
    default:
      return state;
  }
};
export default cartReducer;
