import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/style.css";
import { Header } from "../containers/Header";
import ProductList from "../containers/ProductList";
import { Footer } from "../containers/Footer";
import Grid from "../components/Grid";
import ProductDetails from "../components/ProductDetails";
import Checkout from "../components/checkout/Checkout";
import Filter from "../components/Filter";
import CartWidget from "../components/CartWidget";
import CartContainer from "../containers/CartContainer";

const App = () => (
  <div className="root">
    <div className="main-container">
      <div className="main-container-paper" style={{ padding: "20px" }}>
        <div className="navigation-top">
          <Grid item size={9}>
            <Header />
          </Grid>
          <Grid item size={3}>
            <CartWidget />
          </Grid>
        </div>
        <Grid container size={12}>
          <Switch>
            <Route exact path={"/"}>
              <Grid item size={3}>
                <Filter />
              </Grid>
              <Grid item size={9}>
                <ProductList />
              </Grid>
            </Route>
            <Route
              exact
              path={"/cart"}
              render={() => (
                <Grid item size={12}>
                  <CartContainer />
                </Grid>
              )}
            />
            <Route exact path={"/checkout"} render={() => <Checkout />} />
            <Route
              path={"/product/:id"}
              render={(routerProps) => <ProductDetails {...routerProps} />}
            />
            <ProductList />
          </Switch>
        </Grid>
      </div>
    </div>
    <footer className="footer">
      <Footer />
    </footer>
  </div>
);

export default App;
