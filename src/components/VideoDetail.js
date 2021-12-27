import React, { Component } from "react";

export default class VideoDetail extends Component {
  render() {
    const video = this.props.selectedVideo;

    if (video !== null) {
      return this.renderVideo(video);
    }

    return this.renderPlaceholder();
  }

  renderVideo(video) {
    return (
      <div className="video-detail ui fluid card">
        <img
          className="ui fluid image"
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />

        <div className="content">
          <div className="header">{video.snippet.title}</div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }

  renderPlaceholder() {
    return (
      <div className="video-detail ui placeholder segment">
        <div className="ui icon header">
          <i className="youtube icon"></i>
          Search for a video and select one to play.
        </div>
      </div>
    );
  }
}
