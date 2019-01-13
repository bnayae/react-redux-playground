import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
//import PropTypes from 'prop-types'

export class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.newPost);
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  // Posts.propTypes = {
  //   fetchPosts: PropTypes.func.isRequired,
  //   posts_: PropTypes.array.isRequired
  //   newPost: PropTypes.object
  // }

  render() {
    const postItems = this.props.posts // from mapStateToProps
      .map(post => (
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

const mapStateToProps = state => ({
  // define the props structure + data
  posts: state.post_reducer.items, // post_reducer: from reducer/index -> combineReducers
  newPost: state.post_reducer.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
