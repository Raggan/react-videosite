import "./VideoItem.css";
import React, { Component } from "react";

class VideoItem extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="item video-item">
        <img
          className=" ui image"
          src={video.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
