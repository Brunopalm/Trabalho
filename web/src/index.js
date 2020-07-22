import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <ReduxToastr />
    </div>
  </Provider>,
  document.getElementById("root")
);
