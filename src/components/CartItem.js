import React from "react"
import { Card as CardItem, Row,  Col } from "react-bootstrap"
import { CART_ITEM } from "../Constants"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const cartTemplate = ({ product, text, onClickFunction, decreaseItem, addToCart, itemCount }) => {
  return (<Grid container xs={12}>
    <Col>{product.name}</Col>
    <Col>{product.description}</Col>
    <Col>{product.price} руб.</Col>
    <Col><Button onClick={() => decreaseItem(product)} variant="outlined" color="primary"> - </Button></Col>
    <Col>{itemCount}</Col>
    <Col><Button onClick={() => addToCart(product)} variant="outlined" color="primary"> + </Button></Col>
    <Col><Button onClick={onClickFunction} variant="outlined" color="primary">{text}</Button></Col>
  </Grid>)
}

const cardTemplate = ({ product, text, onClickFunction, category }) => (
  <Grid container xs={12} spacing={3}>
    <Grid item xs={12}>{category}</Grid>
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Link to={{
          pathname: `/product/${product.id}`,
          state: product
        }}>
          {product.name}
        </Link>
      </Grid>
      <Grid item xs={12}><img src={product.imgUrl} alt=""/></Grid>
      <Grid item xs={12}>{product.description}</Grid>
      <Grid item xs={12}>{product.price} руб.</Grid>
    </Grid>
    <Grid item xs={12}><Button onClick={onClickFunction} variant="outlined" color="primary">{text}</Button></Grid>
  </Grid>
)

export const CartItem = ({ product, addToCart, removeFromCart, productInCart, type, decreaseItem, itemCount, category }) => {
  const text = productInCart ? "Remove From Cart" : "Add To Cart"
  const onClickFunction = () => {
    if (type === CART_ITEM) {
      return removeFromCart(product)
    } else {
      return productInCart ? removeFromCart(product) : addToCart(product)
    }
  }

  const itemObject = {
    itemCount,
    decreaseItem,
    category,
    addToCart,
    product,
    text,
    onClickFunction
  }

  return type === CART_ITEM ? cartTemplate(itemObject) : cardTemplate(itemObject)
}
