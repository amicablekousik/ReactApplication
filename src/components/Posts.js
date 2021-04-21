import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import Items from "./Items";

const Posts = props => {
  // const [postList, setPostList] = useState([]);

  useEffect(() => {
    props.fetchPosts();
  }, []);
  // useEffect(() => {
  //   if (postList.length == 0) {
  //     setPostList(props.posts);

  //     console.log("props.posts ", props.posts);
  //   }
  // }, [props.posts]);
  return (
    <div>
      <h1>Posts</h1>

      {/* {postList.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))} */}
      {/* <Items /> */}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  null,
  { fetchPosts: fetchPosts }
)(Posts);
