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

export const createPost = postData => async dispatch => {
  try {
    console.log("Create Post");
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    let post = await response.json();
    dispatch({
      type: NEW_POST,
      payload: post
    });
  } catch (err) {
    console.log(err);
  }
};
