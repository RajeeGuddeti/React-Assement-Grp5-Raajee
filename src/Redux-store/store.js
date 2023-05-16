import { createStore } from "redux";
import cartReducer from "./Reducers/Reducer";
const store = createStore(cartReducer);

export default store;
