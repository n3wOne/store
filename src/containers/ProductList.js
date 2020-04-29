import React, { Component } from "react";
import {Card} from "../components/Card";
import CardDeck from "react-bootstrap/CardDeck";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../action/actions";
import {connect} from "react-redux";
import {CartItem} from "../components/CartItem";
import {CARD_ITEM} from "../Constants";
import {Cart} from "../components/Cart";

class ProductList extends Component{
    constructor(props) {
        super(props);
    }

    addToCart = payload => this.props.dispatch({type: ADD_TO_CART, payload});
    removeFromCart = payload => this.props.dispatch({type: REMOVE_FROM_CART, payload});

    prepareChildren(){
        const {products} = this.props.products;
        const productInCart = (item) => this.props.cart.includes(item);
        return products.map( item => <CartItem type={CARD_ITEM} productInCart={productInCart(item)} addToCart={this.addToCart} removeFromCart={this.removeFromCart} key={item.id} product={item} />);
    }

    render(){
        const children = this.prepareChildren();
        return (<><CardDeck>{children}</CardDeck>
            <Cart />
            </>
                )
    }
};

const mapStateToProps = ({products, cart, cartTotal}) => {
    return {
        products,
        cart: cart.cart,
        cartTotal: cart.cartTotal
    }
};

export default connect(mapStateToProps)(ProductList);
