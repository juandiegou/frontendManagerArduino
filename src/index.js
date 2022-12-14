import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App/index";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./App/reducers/index";
import config from "./config";

import "react-notifications-component/dist/theme.css";
import '../src/assets/index.css'

// Middleware
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>

    <Router basename={config.basename}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
