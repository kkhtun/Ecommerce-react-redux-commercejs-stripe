import actions from "./action-types";
import { commerce } from "../../libs/Commerce";

export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await commerce.products.list();
        dispatch({ type: actions.FETCH_PRODUCTS, payload: response.data });
    };
};
