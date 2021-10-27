import actions from "./action-types";
import { commerce } from "../../libs/Commerce";

export const generateCheckoutToken = (cartID) => {
    return async (dispatch) => {
        try {
            const token = await commerce.checkout.generateToken(cartID, {
                type: "cart",
            });
            dispatch({ type: actions.GENERATE_CHECKOUT_TOKEN, payload: token });
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchShippingCountries = (checkoutTokenID) => {
    return async (dispatch) => {
        const { countries } =
            await commerce.services.localeListShippingCountries(
                checkoutTokenID
            );
        const arrayOfCountries = Object.entries(countries).map(
            ([code, name]) => ({
                code: code,
                label: name,
            })
        );
        dispatch({
            type: actions.FETCH_SHIPPING_COUNTRIES,
            payload: arrayOfCountries,
        });
    };
};

// Expects Code of Country
export const setShippingCountry = (country) => {
    return async (dispatch) => {
        dispatch({
            type: actions.SET_SHIPPING_COUNTRY,
            payload: country,
        });
    };
};

export const fetchShippingSubdivisions = (token, countryCode) => {
    return async (dispatch) => {
        const { subdivisions } =
            await commerce.services.localeListShippingSubdivisions(
                token,
                countryCode
            );
        const arrayOfSubdivisions = Object.entries(subdivisions).map(
            ([code, name]) => ({
                code: code,
                label: name,
            })
        );
        dispatch({
            type: actions.FETCH_SHIPPING_SUBDIVISIONS,
            payload: arrayOfSubdivisions,
        });
    };
};

// Expects Code of Subdivision
export const setShippingSubdivision = (subdivision) => {
    return async (dispatch) => {
        dispatch({
            type: actions.SET_SHIPPING_SUBDIVISION,
            payload: subdivision,
        });
    };
};

export const fetchShippingOptions = (
    token,
    countryCode,
    subdivisionCode = null
) => {
    return async (dispatch) => {
        const options = await commerce.checkout.getShippingOptions(token, {
            country: countryCode,
            region: subdivisionCode,
        });
        dispatch({
            type: actions.FETCH_SHIPPING_OPTIONS,
            payload: options,
        });
    };
};

// Expects ID of Subdivision
export const setShippingOption = (option) => {
    return async (dispatch) => {
        dispatch({
            type: actions.SET_SHIPPING_OPTION,
            payload: option,
        });
    };
};

export const setShippingData = (data) => {
    return {
        type: actions.SET_SHIPPING_DATA,
        payload: data,
    };
};

export const captureCheckout = (tokenID, orderData) => {
    return async (dispatch) => {
        try {
            const incomingOrder = await commerce.checkout.capture(
                tokenID,
                orderData
            );
            dispatch({
                type: actions.CAPTURE_CHECKOUT,
                payload: incomingOrder,
            });
        } catch (error) {
            dispatch({
                type: actions.SET_ERROR,
                payload: error.data.error.message,
            });
        }
    };
};
