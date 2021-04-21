import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = props => {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   props.fetchPosts();
  // }, []);

  // useEffect(() => {
  //   if (props.posts && props.posts.length > 0) {
  //     console.log("props.posts ", props.posts);
  //   }
  // }, [props.posts]);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  { fetchPosts: fetchPosts }
)(Posts);
