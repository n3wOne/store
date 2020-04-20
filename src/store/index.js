import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import reducer from "../reducer";
import data from "../data"
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import cartReducer from "../reducer/cartReducer";

export const history = createHistory();

const reducers = combineReducers({
    products: reducer,
    cart: cartReducer,
    router: connectRouter(history)
});



const middleware = [
    thunk,
    routerMiddleware(history),
    logger
];

const enhancers = [];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const initialState = {};

const store = createStore(
    reducers,
    initialState,
    composedEnhancers
);
export default store;