import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/style.css";
import "../styles/test.scss";
import "../styles/main.scss";
import { Header } from "../components/Header";
import ProductList from "../containers/ProductList";
import { Footer } from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import Checkout from "../components/checkout/Checkout";
import Filter from "../components/Filter";
import CartContainer from "../containers/CartContainer";
import { ROUTE_TO_CART, ROUTE_TO_CHECKOUT, ROUTE_TO_HOME } from "../Constants";
import { useBreakpoint } from "../hoc/BreakpointProvider";

const App = () => {
  const breakpoints = useBreakpoint();
  return (
    <div className="root">
      <div className="main-container">
        <div className="main-container-paper" style={{ padding: "20px 0" }}>
          <div className="navigation-top grid">
            <div className="col-desk-12">
              <Header />
            </div>
          </div>
          <div className="grid">
            <Switch>
              <Route exact path={ROUTE_TO_HOME}>
                {!breakpoints.mob && !breakpoints.tablet && (
                  <div className="col-desk-3 col-mob-4">
                    <Filter />
                  </div>
                )}
                <div
                  className={`col-mob-4 col-desk-${
                    breakpoints.mob || breakpoints.tablet ? 12 : 9
                  }`}
                >
                  <ProductList />
                </div>
              </Route>
              <Route
                exact
                path={ROUTE_TO_CART}
                render={() => (
                  <div className={"col-desk-12"}>
                    <CartContainer />
                  </div>
                )}
              />
              <Route
                exact
                path={ROUTE_TO_CHECKOUT}
                render={() => <Checkout />}
              />
              <Route
                path={"/product/:id"}
                render={(routerProps) => <ProductDetails {...routerProps} />}
              />
              <ProductList />
            </Switch>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
