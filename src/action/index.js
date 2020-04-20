export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SUMM = "SUMM";

export function getTotal(payload) {
    return {
        type: SUMM,
        payload
    }
}

export function addToCartAction(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}
export function removeFromCartAction(payload) {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}