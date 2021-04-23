import React, { useState, useEffect } from "react";
import logo from "../logo.svg";

const Landing = props => {
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
        <a href="/posts">get Posts </a>
      </div>
    </div>
  );
};

export default Landing;
