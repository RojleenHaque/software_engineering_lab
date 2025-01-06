import {
    PRODUCT_LIST_REQ,
    PRODUCT_LIST_REQ_FAIL,
    PRODUCT_LIST_REQ_SUCCESS,
    PRODUCT_DETAIL_REQ,
    PRODUCT_DETAIL_REQ_SUCCESS,
    PRODUCT_DETAIL_REQ_FAIL
} from "../constant/product"



export const productListReducer = (
    state = { products: [] }, action
) => {
    switch (action.type) {
        case PRODUCT_LIST_REQ:
            return {
                loading: true,
                products: [],
            };
        case PRODUCT_LIST_REQ_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                totalPage: action.payload.totalPage,
                page: action.payload.page, // Fixed the incorrect assignment
            };
        case PRODUCT_LIST_REQ_FAIL:
            return {
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export const productReducer = (
    state = { product: {review:[]} }, action
) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQ:
            return {
                loading: true,
                product:[]
            };
        case PRODUCT_DETAIL_REQ_SUCCESS:
            return {
                loading: false,
                product: action.payload,
            };
        case PRODUCT_DETAIL_REQ_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
