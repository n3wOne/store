import {ADD_TO_CART,  REMOVE_FROM_CART, SUMM} from "../action";
import {data} from "../data/mockData";

export const initialState = {
    products: data,
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUMM:
            return {...state, total: action.payload}
        default:
            return state;
    }
};




