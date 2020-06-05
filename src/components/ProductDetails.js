import React from 'react';
import { connect } from 'react-redux';
import { LOAD_PRODUCT_DETAILS } from '../action/actions';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.loadProduct();
  }

  async loadProduct() {
    const { id } = this.props.match.params;
    const product = this.props.dispatch({
      type: LOAD_PRODUCT_DETAILS,
      payload: id,
    });
    try {
      const product = this.props.location.state;
      return await setTimeout(() => this.setState({ product, isLoading: false }), 500);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { isLoading, product } = this.state;

    return isLoading || !product ? <div> Загрузка... </div>
      : <div>
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>;
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(ProductDetails);
