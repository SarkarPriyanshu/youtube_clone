import React from "react";

function VideoDetail({ video }) {
  return (
    <>
      {!video ? (
        <>
          <h1>Search any Youtube Video</h1>
        </>
      ) : (
        <>
          <div className="Video-Player">
            <div className="ui embed">
              <iframe
                title="video player"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
              />
            </div>
            <div className="ui segment">
              <h4 className="ui header">{video.snippet.title}</h4>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VideoDetail;
