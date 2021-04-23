import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import Items from "./items";

const Posts = props => {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <Items />
    </div>
  );
};

export default connect(
  null,
  { fetchPosts: fetchPosts }
)(Posts);
