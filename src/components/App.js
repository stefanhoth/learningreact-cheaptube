import React, { Component } from "react";
import youtubeApi from "../api/youtubeApi";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

export default class App extends Component {
  state = { videos: [] };

  onSearchTerm = async (term) => {
    console.log("User searched for", term);

    const response = await youtubeApi.get("/search", {
      params: {
        part: "snippet",
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="youtube-app">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchTerm} />
        </div>
        <div className="main-window ui relaxed grid container">
          <div className="column-left ten wide column">
            <VideoDetail />
          </div>
          <div className="column right six wide column">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}
