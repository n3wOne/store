import React, {Component, useState} from "react";
import {Card as CardItem, Row, Button, Col} from "react-bootstrap";
import {CART_ITEM} from "../Constants";
import { Route, Link } from 'react-router-dom'

const cartTemplate = ({product, text, onClickFunction, decreaseItem, addToCart, itemCount})=>{
    return(<Row>
    <Col>{product.name}</Col>
    <Col>{product.description}</Col>
    <Col>{product.price}</Col>
    <Col><Button onClick={()=>decreaseItem(product)} variant="primary"> - </Button></Col>
        <Col>{itemCount}</Col>
    <Col><Button onClick={()=>addToCart(product)} variant="primary"> + </Button></Col>
    <Col><Button onClick={onClickFunction} variant="primary">{text}</Button></Col>
</Row>)};

const cardTemplate = ({product, text, onClickFunction}) =>(
    <CardItem style={{ width: '14rem' }}>
        <CardItem.Header>{product.category}</CardItem.Header>
        <CardItem.Body>
            <CardItem.Title>
                <Link to={{ pathname: `/product/${product.id}`,
                state: product
                }}>
                    {product.name}
                </Link>
            </CardItem.Title>
            <CardItem.Text>{product.description}</CardItem.Text>
            <CardItem.Text>{product.price}</CardItem.Text>
        </CardItem.Body>
        <CardItem.Footer><Button onClick={onClickFunction} variant="primary">{text}</Button></CardItem.Footer>
    </CardItem>
);

export const CartItem = ({product, addToCart, removeFromCart, productInCart, type, decreaseItem, itemCount}) =>{
    const text = productInCart ? "Remove From Cart" : "Add To Cart";
    const onClickFunction = () => {
        if(type === CART_ITEM){
            return removeFromCart(product);
        }
        else{
            return productInCart ? removeFromCart(product) : addToCart(product)
        }
    };

    const itemObject = {
        itemCount,
        decreaseItem,
        addToCart,
        product,
        text,
        onClickFunction
    };

    return type === CART_ITEM ? cartTemplate(itemObject) : cardTemplate(itemObject);
};