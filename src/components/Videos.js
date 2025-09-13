import React, { useState, useEffect } from 'react'
import './Videos.css'

const Videos = ({ videos = [], className = '' }) => {
  // Default video data if none provided
  const defaultVideos = [
    { id: 1, src: "/videos/vid1.mp4", title: "01. Video title goes here" },
    { id: 2, src: "/videos/vid2.mp4", title: "02. Video title goes here" },
    { id: 3, src: "/videos/vid3.mp4", title: "03. Video title goes here" },
    { id: 4, src: "/videos/vid4.mp4", title: "04. Video title goes here" },
    { id: 5, src: "/videos/vid5.mp4", title: "05. Video title goes here" },
    { id: 6, src: "/videos/vid6.mp4", title: "06. Video title goes here" },
    { id: 7, src: "/videos/vid7.mp4", title: "07. Video title goes here" },
    { id: 8, src: "/videos/vid8.mp4", title: "08. Video title goes here" },
    { id: 9, src: "/videos/vid9.mp4", title: "09. Video title goes here" }
  ];

  const videoList = videos.length > 0 ? videos : defaultVideos;
  const [activeVideo, setActiveVideo] = useState(videoList[0]);

  const handleVideoClick = (video) => {
    setActiveVideo(video);
  };

  return (
    <div className={`section vid_container ${className}`}>
      <div className="main-video">
        <div className="video">
          <video 
            src={activeVideo.src} 
            controls 
            muted 
            autoPlay
            key={activeVideo.id}
          />
          <h3 className="title">{activeVideo.title}</h3>
        </div>
      </div>

      <div className="video-list">
        {videoList.map((video) => (
          <div 
            key={video.id}
            className={`vid ${activeVideo.id === video.id ? 'active' : ''}`}
            onClick={() => handleVideoClick(video)}
          >
            <video src={video.src} controls muted autoPlay />
            <h3 className="title">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos