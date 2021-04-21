import React from "react";
import "./style.css";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Posts />
      </div>
    </Provider>
  );
}
