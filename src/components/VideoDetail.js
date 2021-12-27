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
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div className="video-detail ui fluid card">
        <div className="ui embed">
          <iframe
            width="560"
            height="315"
            src={videoSrc}
            title={video.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
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
