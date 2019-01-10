import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = props => {
//   return <div>{props.videos.length}</div>;
// };

// Destructured above as { videos } = props,then videos = props.videos
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(vid => {
    return <VideoItem video={vid} onVideoSelect={onVideoSelect} />;
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
