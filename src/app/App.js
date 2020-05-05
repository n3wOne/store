import React, { Component } from "react"
import { Route, Link } from "react-router-dom"

import "../styles/App.css"
import { Header } from "../containers/Header"
import { Sidebar } from "../containers/Sidebar"
import ProductList from "../containers/ProductList"
import { Footer } from "../containers/Footer"
import { Col, Container, Row } from "react-bootstrap"
import { Cart } from "../components/Cart"
import CartWidget from "../components/CartWidget"
import ProductDetails from "../components/ProductDetails"

// const App = () => (
//     <div>
//         <header>
//             <Link to="/">Home</Link>
//             <Link to="/cart">Cart</Link>
//             <CartWidget />
//         </header>
//         <body>
//             {/*<Route exact path="/" component={Catalog} />*/}
//             {/*<Route exact path="/cart" component={Cart} />*/}
//         </body>
//         <footer>
//
//         </footer>
//     </div>
// );

const App = (props) => (
  <Container fluid>
    <Row>
      <Header/>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Col lg={{ offset: 7 }}><CartWidget /></Col>
    </Row>
    <Row>
      <Col lg={3}><Sidebar/></Col>
      <Col>
        <Route exact path={"/"} component={ProductList} />
        <Route exact path={"/cart"} component={Cart} />
        <Route path={"/product/:id"} component={ProductDetails} />
      </Col>
    </Row>
    <Row>
      <Col xs={{ offset: 3 }}>
        <ProductDetails />
      </Col>
    </Row>
    <Row>
      <Col fluid><Footer/></Col>
    </Row>

  </Container>
)

const mapStateToProps = ({ products, cart, cartTotal }) => {
  return {
    products,
    cart: cart.cart,
    cartTotal: cart.cartTotal
  }
}

export default App
