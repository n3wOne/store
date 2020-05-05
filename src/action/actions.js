export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM"
export const FILTER_ITEMS = "FILTER_ITEMS"
export const LOAD_PRODUCT_DETAILS = "LOAD_PRODUCT_DETAILS"
export const LOAD_PRODUCT_DETAILS_SUCCESS = "LOAD_PRODUCT_DETAILS_SUCCESS"
export const LOAD_PRODUCT_LIST = "LOAD_PRODUCT_LIST"

export const loadDetails = payload => ({
  type: LOAD_PRODUCT_DETAILS,
  payload
})

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
})

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload
})

export const decreaseCartItem = payload => ({
  type: DECREASE_CART_ITEM,
  payload
})
