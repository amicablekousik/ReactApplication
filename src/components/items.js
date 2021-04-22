import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Items = props => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (postList.length == 0) {
      setPostList(props.posts);

      console.log("props.posts ", props.posts);
    }
  }, [props.posts]);

  return (
    <div>
      {postList.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  null
)(Items);
