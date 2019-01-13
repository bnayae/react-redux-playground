import { FETCH_POSTS, NEW_POST } from "../actions/types";

export const fetchPosts = () => async dispatch => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    //this.setState({ posts: posts });
    //console.log(posts);
    dispatch({
      type: FETCH_POSTS,
      payload: posts
    });
  } catch (err) {
    console.log(err);
  }
};
