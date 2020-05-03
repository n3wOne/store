import { data, categories } from "../data/mockData";
import {FILTER_ITEMS, LOAD_PRODUCT_DETAILS, LOAD_PRODUCT_DETAILS_SUCCESS} from "../action/actions";


const initialState = {
    products: data,
    categories,
    filterList: [],
    isLoading: false
};

export function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_ITEMS:
            return { ...state, filterList: action.payload };
        case LOAD_PRODUCT_DETAILS:
            return {...state, product_id: action.payload, isLoading: true};
        case LOAD_PRODUCT_DETAILS_SUCCESS:
            return {...state, product: action.payload, isLoading: false};
        default:
            return state
    }
}