import React, { Component } from "react";

class PostSummary extends Component {
  render() {
    return (
      <div className="card post">
        <div className="card-title">{this.props.post.title}</div>
        <div className="card-content">
          {this.props.post.content}
          {/* <p>{this.props.post.content}</p> */}
          {/* <p className="grey">{this.props.post.time.toString()}</p>
        <p className="grey">{this.props.post.uid}</p> */}
        </div>
      </div>
    );
  }
}

export default PostSummary;
