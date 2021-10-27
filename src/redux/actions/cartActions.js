import actions from "./action-types";
import { commerce } from "../../libs/Commerce";

export const fetchCart = () => {
    return async (dispatch) => {
        const cart = await commerce.cart.retrieve();
        dispatch({ type: actions.FETCH_CART, payload: cart ?? {} });
    };
};

export const addToCart = (productID, quantity) => {
    return async (dispatch) => {
        const response = await commerce.cart.add(productID, quantity);
        dispatch({ type: actions.ADD_TO_CART, payload: response.cart });
    };
};

export const updateCartQuantity = (productID, quantity) => {
    return async (dispatch) => {
        const response = await commerce.cart.update(productID, { quantity });
        dispatch({
            type: actions.UPDATE_CART_QUANTITY,
            payload: response.cart,
        });
    };
};

export const removeFromCart = (productID) => {
    return async (dispatch) => {
        const response = await commerce.cart.remove(productID);
        dispatch({
            type: actions.REMOVE_FROM_CART,
            payload: response.cart,
        });
    };
};

export const emptyCart = () => {
    return async (dispatch) => {
        const response = await commerce.cart.empty();
        dispatch({
            type: actions.EMPTY_CART,
            payload: response.cart,
        });
    };
};

export const refreshCart = () => {
    return async (dispatch) => {
        const cart = await commerce.cart.refresh();
        dispatch({
            type: actions.REFRESH_CART,
            payload: cart,
        });
    };
};
