import React from "react";

// video = props.video
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
