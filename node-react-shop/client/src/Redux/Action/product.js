import axios from "axios";
import {
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_REQ_FAIL,
    PRODUCT_LIST_REQ_SUCCESS,
    PRODUCT_DETAIL_REQ,
    PRODUCT_DETAIL_REQ_FAIL,
    PRODUCT_DETAIL_REQ_SUCCESS
} from "../constant/product";

import { BASE_URL } from "../constant/BASE_URL";

// Action to fetch product list
export const productListAction = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQ }); // Set loading state to true

        // API request to fetch products
        const { data } = await axios.get('${BASE_URL}/api/products'); // Update endpoint as per your backend

        dispatch({
            type: PRODUCT_LIST_REQ_SUCCESS,
            payload: data, // Expecting data to contain { products, totalPage, page }
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_REQ_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Action to fetch product details
export const productDetailAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAIL_REQ }); // Set loading state to true

        // API request to fetch product details
        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAIL_REQ_SUCCESS,
            payload: data, // Assuming API returns product details
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_REQ_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
