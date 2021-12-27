import React, { Component } from "react";
import youtubeApi from "../api/youtubeApi";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

export default class App extends Component {
  onSearchTerm = async (term) => {
    console.log("User searched for", term);

    const videos = await youtubeApi.get("/search", {
      params: {
        part: "snippet",
        q: term,
      },
    });

    console.log(videos);
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
