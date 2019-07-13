import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  onSearchSubmit = text => {
    console.log(text);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}

export default App;
