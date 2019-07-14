import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    const renderedList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });
    return <div className="ui relaced divided list">{renderedList}</div>;
  }
}

export default VideoList;
