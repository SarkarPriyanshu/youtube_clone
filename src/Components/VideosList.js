import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videos, handleVideoSelect }) {
  return (
    <>
      <div className="Video-List ui relaxed divided list">
        {videos.map((item, index) => {
          return (
            <>
              <VideoItem handleVideoSelect={handleVideoSelect} data={item} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default VideoList;
