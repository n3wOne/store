import React, { Component, useState } from "react";
import {CartItem} from "./CartItem";
import {removeItemFromCart} from "../../action/cartActions";
import { connect } from 'react-redux'
import {removeFromCartAction} from "../../action";

class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    setTotal(total){
        console.log(this.state)
        this.setState({total: this.state.total+total})
    }


    renderItems(){
        const header = <thead><th>Название</th><th>Описание</th><th>Количество</th><th>Цена</th><th>Общая стоимость</th></thead>;
        const { cart, getTotal, removeFromCart } = this.props;
        const cartItems = [...new Set(cart)];
        const cartChildrens = cartItems.map( cartItem => {
            return <CartItem item={cartItem} removeFromCart={removeFromCart} getTotal={(total)=>this.setTotal(total)} />
        });
        return <table border={1} cellPadding={5} cellSpacing={0} className={"cart-items"}>{header}{cartChildrens}</table>
    }

    render() {
        return(
            <>
            <div>{this.renderItems()}</div>
                <div>{this.state.total}</div>
                </>
        )
    }
}

const mapStateToProps = ({ cart })  => ({
    cart: cart.cart
});


const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: payload => dispatch(removeFromCartAction(payload)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);