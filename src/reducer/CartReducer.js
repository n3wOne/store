import {ADD_TO_CART, DECREASE_CART_ITEM, REMOVE_FROM_CART} from "../action/actions";
import _ from "loadsh";

const initialState = {
    cart: [],
    cartTotal: 0
};

export function CartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return newCartState([...state.cart, action.payload]);
        case REMOVE_FROM_CART:
            return newCartState([...state.cart.filter(item=> item.id !== action.payload.id)]);
        case DECREASE_CART_ITEM:
            return decreaseItem(state, action);
        default:
            return state;
    }
}

const decreaseItem = (state, action) => {
    const newState = state.cart;
    _.remove(newState, (item, index) => index === _.findLastIndex(state.cart, action.payload));
    return newCartState(newState);
};

const getCartTotal = cart => cart.reduce( (total, product) => total + product.price, 0);

const newCartState = (state) => ({
    cart: state,
    cartTotal: getCartTotal(state)
});