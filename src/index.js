import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://rem-rest-api.herokuapp.com/api";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
