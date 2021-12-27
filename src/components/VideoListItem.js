const VideoListItem = ({ video, id }) => {
  return (
    <li className="video-list-item" key={id}>
      <img src={video.thumbnails.medium.url} alt={video.title} />
    </li>
  );
};

export default VideoListItem;
