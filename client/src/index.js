import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  // Provide store to app
  <Provider store={store}>
    <App />
  </Provider>,
  // Inject to root id in react index.html
  document.querySelector("#root")
);
