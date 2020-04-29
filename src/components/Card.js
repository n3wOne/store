import React, {Component, useState} from "react";
import {Card as CardItem, Row, Button} from "react-bootstrap";

export const Card = ({product, addToCart, removeFromCart, productInCart}) =>{
    const [inCart, setInCart] = useState(productInCart);
    const text = inCart ? "Remove From Cart" : "Add To Cart";
    const cartFunction = () => {
        setInCart(!inCart);
        return inCart ? removeFromCart(product) : addToCart(product)
    };
    return <CardItem>
        <CardItem.Body>
            <CardItem.Title>{product.name}</CardItem.Title>
            <CardItem.Text>{product.description}</CardItem.Text>
            <CardItem.Text>{product.price}</CardItem.Text>
        </CardItem.Body>
        <CardItem.Footer><Button onClick={cartFunction} variant="primary">{text}</Button></CardItem.Footer>
    </CardItem>
};