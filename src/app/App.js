import React, { Component } from "react"
import { Route, Link } from "react-router-dom"

import "../styles/App.css"
import { Header } from "../containers/Header"
import { Sidebar } from "../containers/Sidebar"
import ProductList from "../containers/ProductList"
import { Footer } from "../containers/Footer"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Col,  Row } from "react-bootstrap"
import { Cart } from "../components/Cart"
import CartWidget from "../components/CartWidget"
import ProductDetails from "../components/ProductDetails"
import Checkout from "../components/checkout/Checkout";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CartWidgetContainer from "../components/CartWidgetContainer";

const App = (props) => (

  <Container style={{minHeight: "700px"}}>
      <Paper elevation={3} style={{padding: "20px"}}>
    <Grid container alignItems="stretch" justify="center" spacing={3}>
      <Grid item xs={9}><Header /></Grid>
      <Grid item xs={3}><CartWidgetContainer /></Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={3}><Sidebar/></Grid>
      <Grid item xs={9}>
        <Route exact path={"/"} render={(routerProps)=> <ProductList {...routerProps} />} />
        <Route exact path={"/cart"} render={(routerProps)=><Cart {...routerProps} />} />
        <Route exact path={"/checkout"} render={(routerProps)=><Checkout {...routerProps} />} />
        <Route path={"/product/:id"} render={(routerProps)=><ProductDetails  {...routerProps} />} />
      </Grid>
    </Grid>
    <Grid alignItems="flex-end" container spacing={3}>
      <Grid item xs={12}><Footer/></Grid>
    </Grid>
      </Paper>
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
