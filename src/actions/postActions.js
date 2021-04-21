import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts").then(posts =>
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })
  );
};
