import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = props => {
  useEffect(() => {
    props.fetchPosts();
  });
  return <div>Hi</div>;
};

const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(Posts);
