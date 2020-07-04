import React from "react";
import PropTypes from "prop-types";
import { connectProductDetailsToStore } from "../hoc/ConnectHolder";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct() {
    const { id } = this.props.match.params;
    const { loadProductInfo } = this.props;
    loadProductInfo(parseInt(id));
    this.setState({ isLoading: false });
  }

  renderProductDetailsTemplate() {
    const { product } = this.props.products;
    return (
      <div>
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    const { product } = this.props.products;

    return (
      <div className="product-details">
        {isLoading || !product
          ? "Загрузка..."
          : this.renderProductDetailsTemplate()}
      </div>
    );
  }
}

export default connectProductDetailsToStore(ProductDetails);

ProductDetails.propTypes = {
  id: PropTypes.number,
  match: PropTypes.object,
  products: PropTypes.object,
  product: PropTypes.object,
  loadProductInfo: PropTypes.func,
};
