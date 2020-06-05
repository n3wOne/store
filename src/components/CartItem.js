import React from 'react';
import { Card as CardItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Cart, CART_ITEM } from '../Constants';
// import Grid from "@material-ui/core/Grid";
import Grid from './Grid';

const cartTemplate = ({
  product, text, onClickFunction, decreaseItem, addToCart, itemCount,
}) => (<Grid className="product-row" container size={12}>
    <Grid className="prod-title">{product.name}</Grid>
    <Grid className="prod-descr">{product.description}</Grid>
    <Grid>{product.price} руб.</Grid>
    <Grid>
      <button onClick={() => decreaseItem(product)}> - </button>
       <span className="item-count">{itemCount}</span>
      <button onClick={() => addToCart(product)}> + </button>
    </Grid>
    <Grid>{itemCount * product.price}</Grid>
    <Grid><button onClick={onClickFunction}>{text}</button></Grid>
  </Grid>);

const cardTemplate = ({
  product, text, onClickFunction, category,
}) => (
    <div className="product-list-item">
      <div className="prod-body">
        <div className="prod-img">
          <img src={product.imgUrl} alt="" />
        </div>
        <div className="prod-title">
          <Link to={{
            pathname: `/product/${product.id}`,
            state: product,
          }}>
            {product.name}
          </Link>
        </div>
        <div className="prod-descr">{product.description}</div>
      </div>
      <div className="prod-footer">
        <div className="prod-price">{product.price} руб.</div>
        <button className="prod-add-to-cart-button" onClick={onClickFunction}>{text}</button>
      </div>
    </div>
);

export const CartItem = ({
  product, addToCart, removeFromCart, productInCart, type, decreaseItem, itemCount, category,
}) => {
  const text = productInCart ? Cart.REMOVE_FROM_CART : Cart.ADD_TO_CART;
  const onClickFunction = () => {
    if (type === CART_ITEM) {
      return removeFromCart(product);
    }
    return productInCart ? removeFromCart(product) : addToCart(product);
  };

  const itemObject = {
    itemCount,
    decreaseItem,
    category,
    addToCart,
    product,
    text,
    onClickFunction,
  };

  return type === CART_ITEM ? cartTemplate(itemObject) : cardTemplate(itemObject);
};
