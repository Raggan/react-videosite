import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  state = { videos: [] };
  handleVideos = props => {
    const videos = this.props.videos.map(video => {
      return this.setState({ videos });
    });
  };
  render() {
    return (
      <div>
        <ul>
          <VideoItem />
        </ul>
      </div>
    );
  }
}

export default VideoList;
