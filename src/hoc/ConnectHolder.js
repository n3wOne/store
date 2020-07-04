import { connect } from "react-redux";
import {
  removeProductFromCart,
  setCartItemCount,
  addProductToCart,
  clearCart,
  filterItems,
  loadProductListStart,
  loadProductListSuccess,
  loadProductDetails,
} from "../action/actions";

const mapStateToProps = (state) => {
  const { cart, products } = state;
  return {
    isLoading: products.productIsLoading,
    products,
    productsList: products.productsList,
    cartTotal: cart.cartTotal,
    cartItems: cart.cartItems,
  };
};

const mapCartStateToProps = (state) => {
  const { cartTotal, cartItems } = state.cart;
  return {
    total: cartTotal,
    cartItems,
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
  filterItems: (payload) => dispatch(filterItems(payload)),
});

const mapProductDispatchToProps = (dispatch) => ({
  loadProductInfo: (payload) =>
    dispatch(loadProductDetails(payload)),
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (payload) => dispatch(removeProductFromCart(payload)),
  setCartItemCount: (payload) => dispatch(setCartItemCount(payload)),
  addProductToCart: (payload) => dispatch(addProductToCart(payload)),
  clearCart: () => dispatch(clearCart()),
  loadProductListStart: () => dispatch(loadProductListStart()),
  loadProductListSuccess: (payload) =>
    dispatch(loadProductListSuccess(payload)),
});

export const connectToStore = (WrappedComponent) =>
  connect(
    (state) => mapStateToProps(state),
    mapDispatchToProps
  )(WrappedComponent);

export const connectCartWidgetToStore = (CartWidget) =>
  connect((state) => mapCartStateToProps(state))(CartWidget);

export const connectProductDetailsToStore = (ProductDetails) =>
  connect((state) => state, mapProductDispatchToProps)(ProductDetails);

export const connectFilterToStore = (WrappedComponent) =>
  connect(
    (state, props) => mapFilterStateToProps(state, props),
    mapFilterDispatchToProps
  )(WrappedComponent);
