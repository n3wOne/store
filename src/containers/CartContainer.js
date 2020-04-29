import React, { Component } from "react";
import {CartItem} from "../components/CartItem";
import {CART_ITEM} from "../Constants";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {connectCartToStore} from "../hoc/ConnectHolder";

const CartContainer = props =>{
    const prepareChildren = () =>{
        const {cart, addToCart, removeFromCart, decreaseItem} = props;
        const productInCart = (item) => props.cart.includes(item);
        if(!cart) return null;
        const cartItems = [...new Set(cart)];
        return cartItems.map( item =>{
            const itemsCount = cart.filter( cartItem => cartItem.id === item.id).length;
            return (<CartItem
                key={item.id}
                itemCount={itemsCount}
                decreaseItem={decreaseItem}
                type={CART_ITEM}
                productInCart={productInCart(item)}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                product={item}
            />)
        });
    };
        return <>
            <Row>
                <Col>{prepareChildren()}</Col>
            </Row>
            <Row>
                <Col lg={{offset: 11}}>TOTAL: {props.cartTotal}</Col>
            </Row>
        </>

};

export default connectCartToStore(CartContainer);