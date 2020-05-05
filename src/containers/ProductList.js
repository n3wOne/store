import React, { Component } from "react";
import {Card} from "../components/Card";
import CardDeck from "react-bootstrap/CardDeck";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../action/actions";
import {connect} from "react-redux";
import {CartItem} from "../components/CartItem";
import {CARD_ITEM} from "../Constants";
import {Cart} from "../components/Cart";
import {Card as CardItem, CardColumns} from "react-bootstrap";
import {LOAD_PRODUCT_LIST, LOAD_PRODUCT_LIST_SUCCESS} from "../reducer/ProductsReducer";
import axios from "axios";


class ProductList extends Component{

    constructor(props) {
        super(props);
    }


   async componentDidMount() {
        await setTimeout(()=>this.getProductList(), 1000)
    }

    getProductList(){
        this.props.dispatch({
            type: LOAD_PRODUCT_LIST
        });
        axios.get("http://www.mocky.io/v2/5eb1b775320000749428f91a")
            .then(result => this.props.dispatch({
                    type: LOAD_PRODUCT_LIST_SUCCESS,
                    payload: result.data
                }));



    }

    addToCart = payload => this.props.dispatch({type: ADD_TO_CART, payload});
    removeFromCart = payload => this.props.dispatch({type: REMOVE_FROM_CART, payload});

    prepareChildren(){
        const {products, filterList, categories } = this.props.products;
        const productInCart = (item) => this.props.cart.includes(item);
        return products && products.filter(product => filterList.length > 0 ? filterList.includes(product.category) : product)
            .map( item =>{
                // debugger
                return <CartItem
                    key={item.id}
                    category={categories[categories.findIndex(findItem => findItem.key === item.category)].value}
                    type={CARD_ITEM}
                    productInCart={productInCart(item)}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    product={item}
                    style={{ width: '10em', color: "red" }}
                />;
            })

    }

    render(){

        const { isLoading } = this.props;
        console.log("productIsLoading", isLoading)
        return (!isLoading ?
                <><CardColumns>{this.prepareChildren()}</CardColumns>
                    <Cart />
                </>
                : <div>Загрузка данных</div>
                )
    }
};

const mapStateToProps = ({products, cart, cartTotal, isLoading}) => {
    return {
        isLoading: products.productIsLoading,
        products,
        cart: cart.cart,
        cartTotal: cart.cartTotal
    }
};

export default connect(mapStateToProps)(ProductList);
