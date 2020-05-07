import React, { Component } from "react";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../action/actions";
import {connect} from "react-redux";
import {CartItem} from "../components/CartItem";
import {CARD_ITEM} from "../Constants";
import {Cart} from "../components/Cart";
import {Card as CardItem, CardColumns} from "react-bootstrap";
import {LOAD_PRODUCT_LIST, LOAD_PRODUCT_LIST_SUCCESS} from "../reducer/ProductsReducer";
import axios from "axios";
import { data2 as data} from "../data/mockData";
import Grid from "@material-ui/core/Grid";


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

        this.props.dispatch({
            type: LOAD_PRODUCT_LIST_SUCCESS,
            payload: data
        })

        // axios.get("http://www.mocky.io/v2/5eb1b775320000749428f91a")
        //     .then(result => this.props.dispatch({
        //             type: LOAD_PRODUCT_LIST_SUCCESS,
        //             payload: result.data
        //         }));



    }

    addToCart = payload => this.props.dispatch({type: ADD_TO_CART, payload});
    removeFromCart = payload => this.props.dispatch({type: REMOVE_FROM_CART, payload});

    prepareChildren(){
        const {products, filterList, categories } = this.props.products;
        const productInCart = (item) => this.props.cart.includes(item);
        return products && products.filter(product => filterList && filterList.length > 0 ? filterList.includes(product.category) : product)
            .map( item =>{
                return <Grid item xs={3}>
                    <CartItem
                    key={item.id}
                    category={categories && categories[categories.findIndex(findItem => findItem.key === item.category)].value}
                    type={CARD_ITEM}
                    productInCart={productInCart(item)}
                    addToCart={this.addToCart}
                    removeFromCart={this.removeFromCart}
                    product={item}
                /></Grid>;
            })

    }

    render(){

        const { isLoading } = this.props;
        console.log("productIsLoading", isLoading)
        return (!isLoading ?
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    spacing={3}
                    xs={12}
                >
                    {this.prepareChildren()}
                </Grid>
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
