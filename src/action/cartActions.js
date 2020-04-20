export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";

export function increaseItem(payload) {
    return {
        type: INCREASE,
        payload
    }
}

export function removeItemFromCart(payload) {
    return{
        type: REMOVE_ITEM_FROM_CART,
        payload
    }

}

export function decreaseItem(payload) {
    return {
        type: DECREASE,
        payload
    }
}