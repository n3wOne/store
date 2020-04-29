import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
        <div>
            <App />
        </div>
    </ConnectedRouter>
</Provider>, document.getElementById("root"));