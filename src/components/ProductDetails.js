
import React from "react"
import { connectProductDetailsToStore } from "../hoc/ConnectHolder"

class ProductDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {},
      isLoading: true
    }
  }

  async componentDidMount () {
    await this.loadProduct()
  }

  async loadProduct () {
    try {
      const product = {
        name: "test",
        description: "text",
        price: 200
      }
      return await setTimeout(() => this.setState({ product, isLoading: false }), 1500)
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    const { isLoading, product } = this.state

    return isLoading || !product ? <div> Загрузка... </div>
      : <div>
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
  }
};

export default connectProductDetailsToStore(ProductDetails)
