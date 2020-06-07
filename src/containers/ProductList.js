import React, { Component } from "react";
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
    const { addToCart, removeFromCart, cart } = this.props;
    const productInCart = (item) => cart.includes(item);
    const props = {
      type: CARD_ITEM,
      addToCart,
      removeFromCart,
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
        productInCart={productInCart(item)}
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
