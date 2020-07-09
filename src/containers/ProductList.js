import React, { Component } from "react";
import PropTypes from "prop-types";
import { CartItem } from "../components/cart/CartItem";
import {
  CARD_ITEM,
  LOADING,
  FETCH_PRODUCT_DATA_LINK,
  FETCH_CATEGORIES_LINK,
} from "../Constants";
import { data2 as data } from "../data/mockData";
import { connectToStore } from "../hoc/ConnectHolder";

class ProductList extends Component {
  componentDidMount() {
    if (this.props.isLoading) {
      this.getProductList();
    }
  }

  getProductList() {
    const {
      loadProductListStart,
      loadProductListSuccess,
      loadCategoriesSuccess,
      loadCategories,
    } = this.props;

    loadProductListStart();
    loadCategories();

    // loadProductListSuccess(data) // mock data;

    fetch(FETCH_CATEGORIES_LINK)
      .then((res) => res.json())
      .catch((e) => console.error(e))
      .then((result) => loadCategoriesSuccess(result));

    fetch(FETCH_PRODUCT_DATA_LINK)
      .then((res) => res.json())
      .catch((e) => console.error(e))
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
    const { isLoading, categoriesIsLoading } = this.props;
    return !isLoading && !categoriesIsLoading ? (
      <div className="grid">{this.prepareChildren()}</div>
    ) : (
      <div>{LOADING}</div>
    );
  }
}

export default connectToStore(ProductList);

ProductList.propTypes = {
  isLoading: PropTypes.bool,
  categoriesIsLoading: PropTypes.bool,
  loadProductListStart: PropTypes.func,
  loadProductListSuccess: PropTypes.func,
  loadCategoriesSuccess: PropTypes.func,
  loadCategories: PropTypes.func,
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
