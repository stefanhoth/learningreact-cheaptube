import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelected }) => {
  const list =
    videos.length === 0
      ? "No videos found."
      : videos.map((video) => {
          return (
            <VideoListItem
              key={video.id.videoId}
              video={video.snippet}
              id={video.id.videoId}
              onSelected={onVideoSelected}
            />
          );
        });

  return <div className="video-list ui divided link items">{list}</div>;
};

export default VideoList;
