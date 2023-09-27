import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./component/redux/rootReducer";
import { Provider } from "react-redux";

import App from "./component/App/App";
import { spamFilter } from "./component/redux/middleware";

const store = configureStore({
  reducer: rootReducer,
  // middleware: [spamFilter],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
