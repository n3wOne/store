import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { ProductReducer } from "../reducer/ProductsReducer";
import { CartReducer } from "../reducer/CartReducer";

export const history = createHistory();

const reducers = combineReducers({
  isLoading: true,
  products: ProductReducer,
  cart: CartReducer,
  router: connectRouter(history),
});

const composedEnhancers = compose(applyMiddleware(routerMiddleware(history)));

const store = createStore(reducers, {}, composedEnhancers);
export default store;
