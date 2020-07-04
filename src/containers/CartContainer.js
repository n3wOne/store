import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import {
  CART_ITEM,
  ROUTE_TO_CHECKOUT,
  CURRENCY,
  CART_TOTAL,
  ORDER_BUTTON,
} from "../Constants";
import { connectToStore } from "../hoc/ConnectHolder";

const CartContainer = (props) => {
  const prepareChildren = () => {
    const {
      cartItems,
      addProductToCart,
      setCartItemCount,
      removeProductFromCart,
    } = props;

    const productInCart = (item) => cartItems.has(item.id);
    if (!cartItems.size > 0) return <div>В корзине ничего нет</div>;
    return [...cartItems.values()].map((item) => {
      return (
        <CartItem
          key={item.id}
          itemCount={item.count}
          setCartItemCount={setCartItemCount}
          removeProductFromCart={removeProductFromCart}
          addProductToCart={addProductToCart}
          type={CART_ITEM}
          productInCart={productInCart(item)}
          product={item}
        />
      );
    });
  };
  return (
    <div className="cart-container cart">
      {prepareChildren()}
      <div className="cart-total">
        {CART_TOTAL}: {props.cartTotal} {CURRENCY}
      </div>
      <div className="cart-order-button">
        <Link to={ROUTE_TO_CHECKOUT}>
          <button>{ORDER_BUTTON}</button>
        </Link>
      </div>
    </div>
  );
};

export default connectToStore(CartContainer);

CartContainer.propTypes = {
  cartTotal: PropTypes.number,
  decreaseItem: PropTypes.func,
  increaseItemCount: PropTypes.func,
  addProductToCart: PropTypes.func,
  setCartItemCount: PropTypes.func,
  cartItems: PropTypes.object,
  productsList: PropTypes.object,
  removeProductFromCart: PropTypes.func,
};
