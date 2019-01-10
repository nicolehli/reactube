import React from "react";

const VideoItem = props => {
  return (
    <div>
      <img src={props.video.snippet.thumbnails.default.url} />

      {props.video.snippet.title}
    </div>
  );
};

export default VideoItem;
