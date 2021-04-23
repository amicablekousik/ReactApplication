import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  useLocation,
  createBrowserHistory
} from "react-router-dom";

import Landing from "../components/landing";
import Posts from "../components/posts";
const Routes = () => {
  return (
    <Router history={history}>
      <switch>
        <Route path="/" component={Landing} exact />
        <Route path="/posts" component={Posts} exact />
      </switch>
    </Router>
  );
};

export default Routes;
