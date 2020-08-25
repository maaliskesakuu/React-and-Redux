import React, { Component } from "react";

class PostSummary extends Component {
  render() {
    return (
      <div className="card post" style={{padding: "1rem"}}>
        <div className="card-title" style={{paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>{this.props.post.title}</div>
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
