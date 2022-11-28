
import React, {
  useRef, useLayoutEffect,
} from "react";
import { isMobile } from 'react-device-detect';
import "./Video.css";
import ReactWebMediaPlayer from 'react-web-media-player';



//document.querySelector('video').
function Video() {




  const vidRef = useRef();

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handlePlayPress = () => {
    console.log("video  click");
    vidRef.current.pause();
    vidRef.current.currentTime = 0;
    vidRef.current.muted = !vidRef.current.muted;
    vidRef.current.loop = false;
    vidRef.current.play();
  };

  const handleVideoEnded = () => {
    console.log("video ended");
    const section = document.querySelector('#home');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    vidRef.current.currentTime = 15;
  };


  var mobileVideo;
  var blurImage = require("../../assets/png/video/blur.jpg");

  if (!isMobile) {
    mobileVideo = require("../../assets/mp4/intro360.mp4");
  }

  useLayoutEffect(() => {
    const video = document.querySelector('video')
    video.onended = (event) => {
      handleVideoEnded();
    };
    video.playsInline = true;
    video.muted = true;


  }, []);


  return isMobile ? (
    <div style={{
      backgroundColor: "black",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ReactWebMediaPlayer
        // ref={vidRef}
        // allowFullFrame={true}
        // autoplay={false}
        // muted={true}
        // width={window.innerWidth}
        // height={window.innerHeight}
        // onEnded={handleVideoEnded}
        thumbnail={blurImage}
        video={mobileVideo}
      /></div>
  ) : (
    <div onClick={handlePlayPress}
      className="container">
      <img
        src={blurImage}
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video id="videoBG"
        onClick={handlePlayPress}
        ref={vidRef}
        autoPlay={true}
        muted={true}
        loop={false}
        controls={false}
        playsInline={true}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        onLoadedData={onLoadedData}
        onEnded={handleVideoEnded}
        paused={'false'}
        preload="metadata">
        <source src={mobileVideo} type="video/mp4" />
      </video>
    </div>
  );
}


export default Video;