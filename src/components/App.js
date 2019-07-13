import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    let response = await youtube.get("/search", {
      q: term
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
