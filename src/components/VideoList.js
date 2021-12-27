import VideoListItem from "./VideoListItem";

const VideoList = ({ videos }) => {
  const list =
    videos.length === 0
      ? "No videos found."
      : videos.map((video) => {
          return <VideoListItem video={video.snippet} id={video.id.videoId} />;
        });

  return (
    <div className="video-list">
      <ul>{list}</ul>
    </div>
  );
};

export default VideoList;
