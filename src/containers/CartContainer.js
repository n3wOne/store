import React from "react";
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
    const { cart, addToCart, removeFromCart, decreaseItem } = props;
    const productInCart = (item) => props.cart.includes(item);
    if (!cart) return <div>В корзине ничего нет</div>;
    const cartItems = [...new Set(cart)];
    return cartItems.map((item) => {
      const itemsCount = cart.filter((cartItem) => cartItem.id === item.id)
        .length;
      return (
        <CartItem
          key={item.id}
          itemCount={itemsCount}
          decreaseItem={decreaseItem}
          type={CART_ITEM}
          productInCart={productInCart(item)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          product={item}
        />
      );
    });
  };
  return (
    <div className="cart-container">
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
