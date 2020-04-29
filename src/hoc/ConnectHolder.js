import { connect } from "react-redux";
import {ADD_TO_CART, DECREASE_CART_ITEM, REMOVE_FROM_CART} from "../action/actions";


const mapStateToProps = (state, props) => {
    const { cart, cartTotal } = state.cart;
    const { products } = state.products;
    return {
        cart,
        products,
        cartTotal,
        ...props
    }
};

const mapCartState = state =>{
  const {cart, cartTotal} = state.cart;
  return {
      total: cartTotal,
      count: cart.length
  }
};

const mapDispatchToProps = dispatch =>({
    addToCart: payload => dispatch({
            type: ADD_TO_CART,
            payload
        }),
    removeFromCart: payload => dispatch({
        type: REMOVE_FROM_CART,
        payload
    }),
    decreaseItem: payload => dispatch({
        type: DECREASE_CART_ITEM,
        payload
    })
});

export const connectCartToStore = WrappedComponent => connect(
    (state, props) => mapStateToProps(state, props),
    mapDispatchToProps
)(WrappedComponent);

export const connectCartWidgetToStore = CartWidget => connect(
    state => mapCartState(state)
)(CartWidget);