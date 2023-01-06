
import React, { useRef, useLayoutEffect, } from "react";
import "./Video.css";

function Video() {
  const vidRef = useRef();

  // const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  // const onLoadedData = () => {
  //   setIsVideoLoaded(true);
  // };

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
  };


  var mobileVideo = require("../../assets/mp4/apportunity-intro.mp4");
  var videoPoster = require("../../assets/jpg/video/intro.jpg");

  useLayoutEffect(() => {
    const video = document.querySelector('video')
    video.onended = (event) => {
      handleVideoEnded();
    };
    video.playsInline = true;
    video.muted = true;


  }, []);

  return <div className="container">
    <video className="videoBG"
      playsInline muted autoPlay
      onClick={handlePlayPress}
      ref={vidRef}
      poster={videoPoster}
      width={window.innerWidth} height={window.innerHeight}
    >
      <source src={mobileVideo} type="video/mp4" />
      Sorry, your browser doesn't support videos.
    </video>
  </div>

  // !isMobile ? 


}



// : (
//   <div onClick={handlePlayPress}
//     className="container">
//     <img
//       src={blurImage}
//       className="video-thumb tiny"
//       alt="thumb"
//       style={{ opacity: isVideoLoaded ? 0 : 1 }}
//     />
//     <video id="videoBG"
//       onClick={handlePlayPress}
//       ref={vidRef}
//       autoplay
//       muted
//       playsinline
//       width="250"
//       loop={false}
//       controls={false}
//       style={{ opacity: isVideoLoaded ? 1 : 0 }}
//       onLoadedData={onLoadedData}
//       onEnded={handleVideoEnded}
//       paused={'false'}
//       preload="metadata"
//       src={mobileVideo}
//       type="video/mp4"
//     />
//   </div>
// );
//}


export default Video;