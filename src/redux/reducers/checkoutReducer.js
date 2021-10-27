import actions from "../actions/action-types";

const initialState = {
    token: {},
    shippingCountries: [],
    shippingCountry: "",
    shippingSubdivisions: [],
    shippingSubdivision: "",
    shippingOptions: [],
    shippingOption: "",
    shippingData: {},
    order: {},
    error: "",
};

export const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GENERATE_CHECKOUT_TOKEN:
            return { ...state, token: action.payload };
        case actions.FETCH_SHIPPING_COUNTRIES:
            return {
                ...state,
                shippingCountries: action.payload,
                shippingCountry: action.payload[0].code,
            };
        case actions.SET_SHIPPING_COUNTRY:
            return {
                ...state,
                shippingCountry: action.payload, // String of Country Code eg. "US"
            };
        case actions.FETCH_SHIPPING_SUBDIVISIONS:
            return {
                ...state,
                shippingSubdivisions: action.payload,
                shippingSubdivision: action.payload[0].code,
            };
        case actions.SET_SHIPPING_SUBDIVISION:
            return {
                ...state,
                shippingSubdivision: action.payload,
            };
        case actions.FETCH_SHIPPING_OPTIONS:
            return {
                ...state,
                shippingOptions: action.payload,
                shippingOption: action.payload[0].id,
            };
        case actions.SET_SHIPPING_OPTION:
            return {
                ...state,
                shippingOption: action.payload,
            };
        case actions.SET_SHIPPING_DATA:
            return {
                ...state,
                shippingData: action.payload,
            };
        case actions.CAPTURE_CHECKOUT:
            return {
                ...state,
                order: action.payload,
            };
        case actions.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
