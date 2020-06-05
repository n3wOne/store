import { connect } from 'react-redux';
import {
  ADD_TO_CART,
  DECREASE_CART_ITEM,
  FILTER_ITEMS,
  REMOVE_FROM_CART,
} from '../action/actions';

const mapStateToProps = (state, props) => {
  const { cart, cartTotal } = state.cart;
  const { products } = state.products;
  return {
    cart,
    products,
    cartTotal,
    ...props,
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

const mapCartState = (state) => {
  const { cart, cartTotal } = state.cart;
  return {
    total: cartTotal,
    count: cart.length,
  };
};

const mapFilterDispatchToProps = (dispatch) => ({
  filterItems: (payload) => dispatch({
    type: FILTER_ITEMS,
    payload,
  }),
});


const mapDispatchToProps = (dispatch) => ({
  addToCart: (payload) => dispatch({
    type: ADD_TO_CART,
    payload,
  }),
  removeFromCart: (payload) => dispatch({
    type: REMOVE_FROM_CART,
    payload,
  }),
  decreaseItem: (payload) => dispatch({
    type: DECREASE_CART_ITEM,
    payload,
  }),
});

export const connectCartToStore = (WrappedComponent) => connect(
  (state, props) => mapStateToProps(state, props),
  mapDispatchToProps,
)(WrappedComponent);

export const connectCartWidgetToStore = (CartWidget) => connect(
  (state) => mapCartState(state),
)(CartWidget);

export const connectFilterToStore = (WrappedComponent) => connect(
  (state, props) => mapFilterStateToProps(state, props),
  mapFilterDispatchToProps,
)(WrappedComponent);
