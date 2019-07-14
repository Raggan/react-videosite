import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    const renderedList = this.props.videos.map(video => {
      return <VideoItem key={video.id.videoId} video={video} />;
    });
    return <div className="rendered-list">{renderedList}</div>;
  }
}

export default VideoList;
