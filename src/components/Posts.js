import React, { Component } from "react";

export class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [{ id: 1, title: "s", body: "c" }]
    };
  }

  async componentWillMount() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      this.setState({ posts: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
