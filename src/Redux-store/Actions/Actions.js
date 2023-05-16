export const ADDTOCART = "ADD_TO_CART";
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item
  };
};
