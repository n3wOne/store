import React, { Component } from "react";
import PropTypes from "prop-types";
import { CartItem } from "../components/CartItem";
import { CARD_ITEM, LOADING } from "../Constants";
import { data2 as data } from "../data/mockData";
import { connectToStore } from "../hoc/ConnectHolder";

class ProductList extends Component {
  componentDidMount() {
    if (this.props.isLoading) {
      this.getProductList();
    }
  }

  getProductList() {
    const { loadProductListStart, loadProductListSuccess } = this.props;
    loadProductListStart();

    // loadProductListSuccess(data) // mock data;

    fetch("http://www.mocky.io/v2/5eb1b775320000749428f91a")
      .then((res) => res.json())
      .then((result) => loadProductListSuccess(result));
  }

  prepareChildren() {
    const { products, filterList, categories } = this.props.products;
    const {
      cartItems,
      addProductToCart,
      removeProductFromCart,
      setCartItemCount,
    } = this.props;
    const productInCart = (item) => cartItems.has(item);
    const props = {
      type: CARD_ITEM,
      addProductToCart,
      removeProductFromCart,
      setCartItemCount,
    };
    const filterProducts =
      products &&
      products.filter((product) =>
        filterList && filterList.length > 0
          ? filterList.includes(product.category)
          : product
      );
    return filterProducts.map((item) => (
      <CartItem
        {...props}
        key={item.id}
        category={
          categories &&
          categories[
            categories.findIndex((findItem) => findItem.key === item.category)
          ].value
        }
        productInCart={productInCart(item.id)}
        product={item}
      />
    ));
  }

  render() {
    const { isLoading } = this.props;
    return !isLoading ? (
      <div className="product-list">{this.prepareChildren()}</div>
    ) : (
      <div>{LOADING}</div>
    );
  }
}

export default connectToStore(ProductList);

ProductList.propTypes = {
  isLoading: PropTypes.bool,
  loadProductListStart: PropTypes.func,
  loadProductListSuccess: PropTypes.func,
  cart: PropTypes.object,
  addProductToCart: PropTypes.func,
  cartItems: PropTypes.object,
  removeProductFromCart: PropTypes.func,
  setCartItemCount: PropTypes.func,
  products: PropTypes.object,
  filterList: PropTypes.array,
  categories: PropTypes.array,
  count: PropTypes.number,
  total: PropTypes.number,
};
