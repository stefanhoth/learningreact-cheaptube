import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

export default class App extends Component {
  onSearchTerm = (term) => {
    console.log("User search for", term);
  };

  render() {
    return (
      <div className="youtube-app ui container">
        <SearchBar onSubmit={this.onSearchTerm} />
        <VideoDetail />
        <VideoList />
      </div>
    );
  }
}
