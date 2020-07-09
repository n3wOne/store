import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { BreakpointProvider } from "./hoc/BreakpointProvider";
import App from "./app/App";
import store, { history } from "./store";
import { queries } from "./utils";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BreakpointProvider queries={queries}>
        <App />
      </BreakpointProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
