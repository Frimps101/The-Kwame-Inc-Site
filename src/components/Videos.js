import React from 'react'
import './Videos.css'

const Videos = () => {

    let listVideo = document.querySelectorAll('.video-list .vid');
    let mainVideo = document.querySelector('.main-video video');
    let title = document.querySelector('.main-video .title');

    listVideo.forEach(video => {
        video.onclick = () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');

            if(video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo.src = src;
                let text = video.children[1].innerHTML;
                title.innerHTML = text;
            }
        }
    })


  return (
    <div className='vid_container'>
        
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
  )
}

export default Videos