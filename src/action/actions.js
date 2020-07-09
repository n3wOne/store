export const LOAD_PRODUCT_LIST_SUCCESS = "LOAD_PRODUCT_LIST_SUCCESS";
export const FILTER_ITEMS = "FILTER_ITEMS";
export const LOAD_PRODUCT_DETAILS = "LOAD_PRODUCT_DETAILS";
export const LOAD_PRODUCT_DETAILS_SUCCESS = "LOAD_PRODUCT_DETAILS_SUCCESS";
export const LOAD_PRODUCT_LIST = "LOAD_PRODUCT_LIST";
export const CLEAR_CART = "CLEAR_CART";
export const ADD_TO_CART_ITEM = "ADD_TO_CART_ITEM";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const SET_CART_ITEM_COUNT = "SET_CART_ITEM_COUNT";
export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const LOAD_CATEGORIES_SUCCESS = "LOAD_CATEGORIES_SUCCESS";

export const removeProductFromCart = (payload) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
});

export const setCartItemCount = (payload) => ({
  type: SET_CART_ITEM_COUNT,
  payload,
});

export const addProductToCart = (payload) => ({
  type: ADD_TO_CART_ITEM,
  payload,
});

export const filterItems = (payload) => ({
  type: FILTER_ITEMS,
  payload,
});
export const clearCart = () => ({ type: CLEAR_CART });

export const loadProductListStart = () => ({
  type: LOAD_PRODUCT_LIST,
});

export const loadProductListSuccess = (payload) => ({
  type: LOAD_PRODUCT_LIST_SUCCESS,
  payload,
});

export const loadProductDetails = (payload) => ({
  type: LOAD_PRODUCT_DETAILS,
  payload,
});

export const loadCategories = (payload) => ({
  type: LOAD_CATEGORIES,
  payload,
});

export const loadCategoriesSuccess = (payload) => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload,
});
