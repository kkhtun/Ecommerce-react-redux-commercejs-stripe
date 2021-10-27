import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { checkoutReducer } from "./checkoutReducer";
import { combineReducers } from "redux";

export default combineReducers({
    productsReducer,
    cartReducer,
    checkoutReducer,
});
