import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={on => {onVideoSelect(video)}} className="video-item item" >
      <img className="ui image" id="imageDiv" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className="content" >
        <div className="header" id="headerDiv">{video.snippet.title}</div>
      </div>
    </div>
  )
};

export default VideoItem;
