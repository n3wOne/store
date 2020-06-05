import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../action/actions';
import { CartItem } from '../components/CartItem';
import { CARD_ITEM, LOADING } from '../Constants';
import { LOAD_PRODUCT_LIST, LOAD_PRODUCT_LIST_SUCCESS } from '../reducer/ProductsReducer';
import { data2 as data } from '../data/mockData';


class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isLoading) {
      this.getProductList();
    }
  }

  getProductList() {
    this.props.dispatch({
      type: LOAD_PRODUCT_LIST,
    });

    // this.props.dispatch({
    //     type: LOAD_PRODUCT_LIST_SUCCESS,
    //     payload: data
    // })

    axios.get('http://www.mocky.io/v2/5eb1b775320000749428f91a')
      .then((result) => this.props.dispatch({
        type: LOAD_PRODUCT_LIST_SUCCESS,
        payload: result.data,
      }));
  }

    addToCart = (payload) => this.props.dispatch({ type: ADD_TO_CART, payload });

    removeFromCart = (payload) => this.props.dispatch({ type: REMOVE_FROM_CART, payload });

    prepareChildren() {
      const { products, filterList, categories } = this.props.products;
      const productInCart = (item) => this.props.cart.includes(item);
      const props = {
        type: CARD_ITEM,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
      };
      const filterProducts = products && products.filter((product) => (filterList && filterList.length > 0 ? filterList.includes(product.category) : product));
      return filterProducts
        .map((item) => <CartItem
            {...props}
                    key={item.id}
                    category={categories && categories[categories.findIndex((findItem) => findItem.key === item.category)].value}
                    productInCart={productInCart(item)}
                    product={item}
                />);
    }

    render() {
      const { isLoading } = this.props;
      return (!isLoading
        ? <div className="product-list">
                    {this.prepareChildren()}
                </div>
        : <div>{LOADING}</div>
      );
    }
}

const mapStateToProps = ({
  products, cart,
}) => ({
  isLoading: products.productIsLoading,
  products,
  cart: cart.cart,
  cartTotal: cart.cartTotal,
});

export default connect(mapStateToProps)(ProductList);
