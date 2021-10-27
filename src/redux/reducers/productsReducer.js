import actions from "../actions/action-types";

const initialState = {
    products: [],
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
};
