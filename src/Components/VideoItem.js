import React from "react";
import "./videoitem.css";

function VideoItem({ data, handleVideoSelect }) {
  return (
    <>
      <div
        onClick={() => handleVideoSelect(data)}
        className="video-item"
        key={data.id.videoId}
      >
        <div className="video-item-thumbnail">
          <img src={data.snippet.thumbnails.medium.url} alt="" />
        </div>
        <p className="video-item-description">{data.snippet.title}</p>
      </div>
    </>
  );
}

export default VideoItem;
