import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = props => {
//   return <div>{props.videos.length}</div>;
// };

// Destructured above as { videos } = props,then videos = props.videos
const VideoList = ({ videos }) => {
  const renderList = videos.map(vid => {
    // console.log(vid); // testing prop
    return <VideoItem video={vid} />;
  });

  return <div>{renderList}</div>;
};

export default VideoList;
