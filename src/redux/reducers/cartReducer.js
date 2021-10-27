import actions from "../actions/action-types";

const initialState = {
    cart: {},
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_CART:
            return { ...state, cart: action.payload };
        case actions.ADD_TO_CART:
            return { ...state, cart: action.payload };
        case actions.UPDATE_CART_QUANTITY:
            return { ...state, cart: action.payload };
        case actions.REMOVE_FROM_CART:
            return { ...state, cart: action.payload };
        case actions.EMPTY_CART:
            return { ...state, cart: action.payload };
        case actions.REFRESH_CART:
            return { ...state, cart: action.payload };
        default:
            return state;
    }
};
