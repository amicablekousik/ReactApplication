import React from "react";
import "./style.css";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/posts";
import Items from "./components/items";
import Routes from "./configuration/routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
