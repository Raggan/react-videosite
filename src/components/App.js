import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends Component {
  onTermSubmit = async term => {
    await youtube.get("/search", {
      q: term
    });
    console.log();
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
