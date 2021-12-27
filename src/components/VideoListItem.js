const VideoListItem = ({ video, id, onSelected }) => {
  return (
    <div className="video-list-item item" onClick={(event) => onSelected(id)}>
      <div className="ui image small">
        <img src={video.thumbnails.medium.url} alt={video.title} />
      </div>
      <div className="middle aligned content">
        <a
          className="header"
          href="#video"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
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
