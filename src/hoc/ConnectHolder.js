import { connect } from "react-redux";
import {
  ADD_TO_CART,
  DECREASE_CART_ITEM,
  FILTER_ITEMS,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "../action/actions";
import {
  LOAD_PRODUCT_LIST,
  LOAD_PRODUCT_LIST_SUCCESS,
} from "../reducer/ProductsReducer";

const mapStateToProps = (state) => {
  const { cart, products } = state;
  return {
    isLoading: products.productIsLoading,
    products,
    cart: cart.cart,
    cartTotal: cart.cartTotal,
  };
};

const mapCartStateToProps = (state) => {
  const { cart, cartTotal } = state.cart;
  return {
    total: cartTotal,
    count: cart.length,
  };
};

const mapFilterStateToProps = (state) => {
  const { categories, filterList, isLoading } = state.products;
  return {
    isLoading,
    categories,
    filterList,
  };
};

const mapFilterDispatchToProps = (dispatch) => ({
  filterItems: (payload) =>
    dispatch({
      type: FILTER_ITEMS,
      payload,
    }),
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) =>
    dispatch({
      type: ADD_TO_CART,
      payload,
    }),
  removeFromCart: (payload) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload,
    }),
  decreaseItem: (payload) =>
    dispatch({
      type: DECREASE_CART_ITEM,
      payload,
    }),
  clearCart: () =>
    dispatch({
      type: CLEAR_CART,
    }),
  loadProductListStart: () =>
    dispatch({
      type: LOAD_PRODUCT_LIST,
    }),
  loadProductListSuccess: (payload) =>
    dispatch({
      type: LOAD_PRODUCT_LIST_SUCCESS,
      payload,
    }),
});

export const connectToStore = (WrappedComponent) =>
  connect(
    (state) => mapStateToProps(state),
    mapDispatchToProps
  )(WrappedComponent);

export const connectCartWidgetToStore = (CartWidget) =>
  connect((state) => mapCartStateToProps(state))(CartWidget);

export const connectFilterToStore = (WrappedComponent) =>
  connect(
    (state, props) => mapFilterStateToProps(state, props),
    mapFilterDispatchToProps
  )(WrappedComponent);
