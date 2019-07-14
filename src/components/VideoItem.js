import React, { Component } from "react";

class VideoItem extends Component {
  render() {
    return <div>{console.log(this.props.video)}</div>;
  }
}

export default VideoItem;
