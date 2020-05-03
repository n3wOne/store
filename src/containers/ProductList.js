import React, { Component } from "react";
import {Card} from "../components/Card";
import CardDeck from "react-bootstrap/CardDeck";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../action/actions";
import {connect} from "react-redux";
import {CartItem} from "../components/CartItem";
import {CARD_ITEM} from "../Constants";
import {Cart} from "../components/Cart";
import {Card as CardItem, CardColumns} from "react-bootstrap";

class ProductList extends Component{
    constructor(props) {
        super(props);
    }

    addToCart = payload => this.props.dispatch({type: ADD_TO_CART, payload});
    removeFromCart = payload => this.props.dispatch({type: REMOVE_FROM_CART, payload});

    prepareChildren(){
        const {products, filterList } = this.props.products;
        const productInCart = (item) => this.props.cart.includes(item);
        window.filt = filterList;
        return products.filter(product => filterList.length > 0 ? filterList.includes(product.category) : product)
            .map( item =>
                <CartItem
                    key={item.id}
                    type={CARD_ITEM}
                    productInCart={productInCart(item)}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    product={item}
                    style={{ width: '10em', color: "red" }}
                />);
    }

    render(){
        const children = this.prepareChildren();
        return (<><CardColumns>{children}</CardColumns>
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
