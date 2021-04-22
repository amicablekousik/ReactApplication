import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Route,
  Router,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";

import Landing from "../components/landing";
import Posts from "../components/posts";
const Routes = () => {
  return (
    <Router history={history}>
      <switch>
        <Route path="/" component={Landing} />
        <Route path="/posts" component={Posts} />
      </switch>
    </Router>
  );
};

export default Routes;
