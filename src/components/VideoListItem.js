const VideoListItem = ({ video, id }) => {
  return (
    <div className="video-list-item item" key={id}>
      <div className="ui image small">
        <img src={video.thumbnails.medium.url} alt={video.title} />
      </div>
      <div className="middle aligned content">
        <a className="header" href="#video">
          {video.title}
        </a>
        <div className="meta">
          <span>{video.channelTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
