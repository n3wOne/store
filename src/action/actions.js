export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
});

export const removeFromCart = payload => ({
    type: REMOVE_FROM_CART,
    payload
});

export const decreaseCartItem = payload => ({
    type: DECREASE_CART_ITEM,
    payload
});