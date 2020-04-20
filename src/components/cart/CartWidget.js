import React, { Component } from "react";
import Cart from "./Cart";

export default class CartWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
            total: 0,
            showCartText: `Show Cart`
        }
    }

    showCart(){
        const { isShown } = this.state;
        if(!isShown){
            this.setState({isShown: !isShown, showCartText: "Hide Cart"});

        }else{
            this.setState({isShown: !isShown, showCartText: "Show Cart"});
        }

    }

    render(){
        return(
            <div className={"cart-widget"}>
                <div className={"cart-widget-item cart-widget-item-total"}>Total: {this.state.total}</div>
                <div className={"cart-widget-item cart-widget-item-showcart"} onClick={()=>this.showCart()}>{this.state.showCartText}</div>
                {this.state.isShown && <div className={"cart-widget-cart"}><Cart cart={this.props.cart} /></div>}
            </div>
        )
    }

}



