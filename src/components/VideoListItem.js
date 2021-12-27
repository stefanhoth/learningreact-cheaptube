const VideoListItem = ({ video, onSelected }) => {
  const snippet = video.snippet;

  return (
    <div className="video-list-item item" onClick={() => onSelected(video)}>
      <div className="ui image small">
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      </div>
      <div className="middle aligned content">
        <div className="header">{snippet.title}</div>
        <div className="meta">
          <span>{snippet.channelTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
