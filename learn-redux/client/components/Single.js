import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo'

const Single = React.createClass({
  render() {
    //index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId)
    const post = this.props.posts[i];
    console.log(post)
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
      </div>
    )
  }
})

export default Single;
