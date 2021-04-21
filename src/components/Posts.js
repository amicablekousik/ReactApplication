import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = props => {
  // console.log("props", this.props);
  useEffect(() => {
    props.fetchPosts();
  });

  return <div>Hi</div>;
};

export default connect(
  null,
  { fetchPosts }
)(Posts);
