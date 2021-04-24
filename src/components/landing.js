import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { Link, useHistory } from "react-router-dom";

const Landing = props => {
  const history = useHistory();
  const getPosts = () => {
    history.push(`/posts`);
  };
  return (
    <div>
      <div className="App">
        <header className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
      </div>
      <br />
      <br />
      <div>
        {/* <a href="/posts" click={getPosts}>
          get Posts{" "}
        </a> */}
        <a href="#" onClick={getPosts}>
          get Posts{" "}
        </a>
      </div>
    </div>
  );
};

export default Landing;
