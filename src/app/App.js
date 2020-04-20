import React, { Component } from "react";
import Cart from "../components/cart/Cart"
import Catalog from "../containers/productList/ProductList"
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import store from '../store'

import '../styles/App.css';
import CartWidget from "../components/cart/CartWidget";

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <CartWidget />
        </header>
        <body>
            <Route exact path="/" component={Catalog} />
            <Route exact path="/cart" component={Cart} />
        </body>
        <footer>

        </footer>
    </div>
);

// class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <ProductList />
//             </Provider>
//         );
//     }
// }

const mapStateToProps = ({ cart })  => ({
    cart: cart.cart
});

export default connect(mapStateToProps)(App);