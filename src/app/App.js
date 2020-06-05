import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/style.css';
import { Header } from '../containers/Header';
import ProductList from '../containers/ProductList';
import { Footer } from '../containers/Footer';
import Grid from '../components/Grid';
import { Cart } from '../components/Cart';
import ProductDetails from '../components/ProductDetails';
import Checkout from '../components/checkout/Checkout';
import Filter from '../components/Filter';
import CartWidget from '../components/CartWidget';

const App = (props) => (
        <div className="root">
            <div className="main-container">
                <div className="main-container-paper" style={{ padding: '20px' }}>
                    <div className="navigation-top">
                        <Grid item size={9}><Header /></Grid>
                        <Grid item size={3}><CartWidget /></Grid>
                    </div>
                    <Grid container>
                        <Grid item size={3}><Filter /></Grid>
                        <Grid item size={9}>
                            <Route exact path={'/'} render={(routerProps) => <ProductList {...routerProps} />} />
                            <Route exact path={'/cart'} render={(routerProps) => <Cart {...routerProps} />} />
                            <Route exact path={'/checkout'} render={(routerProps) => <Checkout {...routerProps} />} />
                            <Route path={'/product/:id'} render={(routerProps) => <ProductDetails {...routerProps} />} />
                        </Grid>
                    </Grid>
                </div>

            </div>
            <footer className="footer">
                <Footer />
            </footer>

        </div>
);


const mapStateToProps = (state, props) => ({
  products: state.products,
  cart: state.cart.cart,
  cartTotal: state.cart.cartTotal,
});

export default connect(mapStateToProps)(App);
