import React from "react";
import "./Videos.css";
import { useEffect } from "react";

const Videos = () => {
  // let listVideo = document.querySelectorAll('.video-list .vid');
  // let mainVideo = document.querySelector('.main-video video');
  // let title = document.querySelector('.main-video .title');

  // listVideo.forEach(video => {
  //     video.onclick = () => {
  //         listVideo.forEach(vid => vid.classList.remove('active'));
  //         video.classList.add('active');

  //         if(video.classList.contains('active')){
  //             let src = video.children[0].getAttribute('src');
  //             mainVideo.src = src;
  //             let text = video.children[1].innerHTML;
  //             title.innerHTML = text;
  //         }
  //     }
  // })

  useEffect(() => {
    const listVideo = document.querySelectorAll(".video-list .vid");
    const mainVideo = document.querySelector(".main-video video");
    const title = document.querySelector(".main-video .title");

    listVideo.forEach((video) => {
      video.onclick = () => {
        listVideo.forEach((vid) => vid.classList.remove("active"));
        video.classList.add("active");

        if (video.classList.contains("active")) {
          const src = video.children[0].getAttribute("src");
          mainVideo.src = src;
          const text = video.children[1].innerHTML;
          title.innerHTML = text;
        }
      };
    });
  }, []);

  return (
    <>
      <h3 className="mt-[4rem] text-3xl font-bold text-center my-4">
        Frame Your World with Captivating Videos
      </h3>
      <p className="text-center mb-6">
      Transform your digital space with our curated collection of stunning frames.
      </p>
      <div className="vid_container">
        <div className="main-video">
          <div className="video">
            <video src="/videos/vid1.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
        </div>

        <div className="video-list">
          <div className="vid active">
            <video src="/videos/vid1.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid2.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid3.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid4.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid5.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid6.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid7.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid8.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
          <div className="vid">
            <video src="/videos/vid9.mp4" controls muted autoPlay></video>
            <h3 className="title">01. Video title goes here</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
