import {DECREASE, INCREASE, REMOVE_ITEM_FROM_CART} from "../action/cartActions";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../action";

const initialState = {
    cart: [],
    total: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.payload);
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.payload);
        case INCREASE:
            return increaseCartItem(state, action.payload);
        case DECREASE:
            return removeFromCart(state, action.payload);
        default:
            return state;
    }
};

export const increaseCartItem = (state, payload) =>{
    return {...state, cart: [...state.cart, payload]}
};

export const addToCart = (state, payload) =>{
    return {...state, cart: [...state.cart, payload]}
};

export const removeFromCart = (state, payload) => {
    return {...state, cart: [...state.cart.filter( item => item.id !== payload)]}
};