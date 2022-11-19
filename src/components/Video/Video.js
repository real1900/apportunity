import React, { useRef,
  // useState
   } from "react";


import "./Video.css";
import desktopVideo from "../../assets/mp4/intro1080.mp4";
import tabletVideo from "../../assets/mp4/intro720.mp4";
import mobileVideo from "../../assets/mp4/intro720.mp4";
import blurImage from "../../assets/png/video/blur.jpg";

function Video() {

  const vidRef = useRef();

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  // const handleToggleMute = () => setMuted(current => !current);
  // const [muted, setMuted] = useState(true);



  const getVideoSrc = width => {
    if (width >= 1080) return desktopVideo;
    if (width >= 720) return tabletVideo;
    return mobileVideo;
  };

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const handlePlayPress = () => {
    vidRef.current.pause();
    vidRef.current.currentTime = 0;
    vidRef.current.muted = !vidRef.current.muted;
    vidRef.current.loop = false;
    vidRef.current.play();
  };

  const handleVideoEnded = () => {
    console.log('Video ended!');
    const section = document.querySelector('#home');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    vidRef.current.currentTime = 15;
    // var mediaElement = document.getElementById("video");
    // mediaElement.currentTime = 0;
  };

  const src = getVideoSrc(window.innerWidth);

  return (
    <div className="container">
      <img
        src={blurImage}
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}
      />
      <video
        onClick={handlePlayPress}
        ref={vidRef}
        muted
        autoPlay
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        onLoadedData={onLoadedData}
        onEnded={handleVideoEnded}
        src={src} type="video/mp4" />
    </div>
  );
}

export default Video;
