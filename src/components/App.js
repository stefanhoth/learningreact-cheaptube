import React, { Component } from "react";
import youtubeApi from "../api/youtubeApi";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchTerm = async (term) => {
    const response = await youtubeApi.get("/search", {
      params: {
        part: "snippet",
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="youtube-app">
        <div className="ui container">
          <h1 className="ui center aligned header">CheapTube</h1>
          <SearchBar onSubmit={this.onSearchTerm} defaultSearchTerm='Dresden' />
        </div>
        <div className="ui hidden divider"></div>
        <div className="main-window ui relaxed grid container">
          <div className="column-left ten wide column">
            <VideoDetail selectedVideo={this.state.selectedVideo} />
          </div>
          <div className="column right six wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelected={this.onVideoSelected}
            />
          </div>
        </div>
      </div>
    );
  }
}
