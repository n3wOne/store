import {
  CLEAR_CART,
  ADD_TO_CART_ITEM,
  REMOVE_ITEM_FROM_CART,
  SET_CART_ITEM_COUNT,
} from "../action/actions";

const initialState = {
  cartTotal: 0,
  cartItems: new Map([]),
};

const getCartTotal = (cart) =>
  [...cart.cartItems.values()].reduce(
    (total, product) => total + product.price * product.count,
    0
  );

const newCartState = (state) => ({
  cartItems: state.cartItems,
  cartTotal: getCartTotal(state),
});

const addToCart = (state, payload) => {
  return {
    ...state,
    cartItems: new Map([...state.cartItems]).set(payload.id, {
      ...payload,
      count: 1,
    }),
  };
};

const removeProductFromCart = (state, payload) => {
  state.cartItems.delete(payload);
  return { ...state };
};

const setCartItemCount = (state, payload) => {
  if (payload.count > 0) {
    return {
      ...state,
      cartItems: state.cartItems.set(payload.id, {
        ...payload,
        count: payload.count,
      }),
    };
  }
  state.cartItems.delete(payload.id);
  return { ...state };
};

export function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART_ITEM:
      return newCartState(addToCart(state, action.payload));
    case REMOVE_ITEM_FROM_CART:
      return newCartState(removeProductFromCart(state, action.payload));
    case SET_CART_ITEM_COUNT:
      return newCartState(setCartItemCount(state, action.payload));
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
