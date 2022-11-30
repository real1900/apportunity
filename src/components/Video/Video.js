
import React, {
  useRef, useLayoutEffect,
} from "react";
import { isMobile } from 'react-device-detect';
import "./Video.css";
// import ReactWebMediaPlayer from 'react-web-media-player';
// import { Player } from "video-react";



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

  // const src =
  //   "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
 

  return isMobile ? (
     <video  id="videoBG" playsinline muted autoplay
      width={window.innerWidth}
      height={window.innerHeight}>
      <source src={mobileVideo} type="video/mp4" />
    Sorry, your browser doesn't support videos.
  </video>
    // <Player
    //   src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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
        autoplay
        muted
        playsinline
        width="250"
        loop={false}
        controls={false}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        onLoadedData={onLoadedData}
        onEnded={handleVideoEnded}
        paused={'false'}
        preload="metadata"
        src={mobileVideo}
        type="video/mp4"
      />
    </div>
  );
}


export default Video;