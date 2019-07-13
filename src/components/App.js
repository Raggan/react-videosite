import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoItem from "./VideoItem";
import VideoDetail from "./VideoDetail";

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoList />
        <VideoItem />
      </div>
    );
  }
}

export default App;
