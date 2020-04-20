import React from 'react'
import ReactDOM from "react-dom";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTotal } from "../../reducer"
import { Product } from "../../components/product/Product";
import {addToCartAction, getTotal, removeFromCartAction} from "../../action";
import Cart from "../../components/cart/Cart";

class ProductList extends React.Component{
    constructor(props) {
        super(props);

    }

    createChildren(){
        const { products, addToCart, removeFromCart } = this.props;
        return products.map( product => {
            return <div><Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} /></div>
        });

    }

    render() {
        const children =  this.createChildren();
        return(
            <>
                <div className={"products-list"}>{children}</div>
                <div className={"cart"}><Cart getTotal={this.props.getTotal} cart={this.props.cart} /></div>
                <div>
                    <h1>Home</h1>
                    <p>Welcome home!</p>
                    <p>Total {this.props.total}</p>
                    <button onClick={this.props.addTotal}>Add</button>
                    <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ products, cart })  => ({
    total: products.total,
    products: products.products,
    cart: cart.cart
});

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: payload => dispatch(removeFromCartAction(payload)),
        addToCart: payload => dispatch(addToCartAction(payload)),
        getTotal: payload => dispatch(getTotal(payload))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList)