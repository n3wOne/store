import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Cart, CART_ITEM } from "../../Constants";

const cartTemplate = ({
  product,
  text,
  onClickFunction,
  itemCount,
  setCartItemCount,
}) => (
  <div className="product-row col-desk-12 grid">
    <img className="product-item-img" src={product.imgUrl} alt="" />
    <div className="product-item-title">{product.name}</div>
    <div className="product-item-control">
      <button
        onClick={() => setCartItemCount({ ...product, count: --itemCount })}
      >
        {" "}
        -{" "}
      </button>
      <span className="item-count">{itemCount}</span>
      <button
        onClick={() => setCartItemCount({ ...product, count: ++itemCount })}
      >
        {" "}
        +{" "}
      </button>
    </div>
    <div className="product-item-total">{itemCount * product.price}</div>
    <div className="product-item-button">
      <button onClick={onClickFunction}>{text}</button>
    </div>
  </div>
);

const cardTemplate = ({ product, text, onClickFunction }) => (
  <div className="product-list-item col-desk-">
    <div className="prod-body">
      <div className="prod-img">
        <div
          className={"img"}
          style={{
            background: `url(${product.imgUrl}) 50% 50% no-repeat`,
            backgroundSize: "contain",
          }}
          alt=""
        />
      </div>
      <div className="prod-title">
        <Link
          to={{
            pathname: `/product/${product.id}`,
            state: product,
          }}
        >
          {product.name}
        </Link>
      </div>
      <div className="prod-descr">{product.description}</div>
    </div>
    <div className="prod-footer">
      <div className="prod-price">{product.price} руб.</div>
      <button className="prod-add-to-cart-button" onClick={onClickFunction}>
        {text}
      </button>
    </div>
  </div>
);

export const CartItem = ({
  product,
  productInCart,
  type,
  decreaseItem,
  itemCount,
  category,
  addProductToCart,
  removeProductFromCart,
  setCartItemCount,
}) => {
  const text = productInCart ? Cart.REMOVE_FROM_CART : Cart.ADD_TO_CART;
  const onClickFunction = () => {
    if (type === CART_ITEM) {
      return removeProductFromCart(product.id);
    }
    return productInCart
      ? removeProductFromCart(product.id)
      : addProductToCart(product);
  };

  const itemProps = {
    itemCount,
    decreaseItem,
    category,
    product,
    text,
    setCartItemCount,
    onClickFunction,
  };

  return type === CART_ITEM ? cartTemplate(itemProps) : cardTemplate(itemProps);
};

cartTemplate.propTypes = {
  product: PropTypes.object,
  text: PropTypes.string,
  onClickFunction: PropTypes.func,
  itemCount: PropTypes.number,
  setCartItemCount: PropTypes.func,
};

cardTemplate.propTypes = {
  product: PropTypes.object,
  text: PropTypes.string,
  onClickFunction: PropTypes.func,
};
