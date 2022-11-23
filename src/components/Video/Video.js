
import React, {
  useRef,
} from "react";
import { isMobile } from 'react-device-detect';

import "./Video.css";
//import desktopVideo from "../../assets/mp4/intro1080.mp4";
//import tabletVideo from "../../assets/mp4/intro720.mp4";
import mobileVideo from "../../assets/mp4/intro360.mp4";
import blurImage from "../../assets/png/video/blur.jpg";

function Video() {

  const vidRef = useRef();

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  // const handleToggleMute = () => setMuted(current => !current);
  // const [muted, setMuted] = useState(true);


  const getVideoSrc = width => {
    // if (width >= 1080) return desktopVideo;
    // if (width >= 720) return tabletVideo;
    if (isMobile){
      return null
    }
    

    return mobileVideo;
  };

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

  const src = getVideoSrc(window.innerWidth);

  return isMobile ? (
     <></>
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
        playsinline={true}
        loop={false}
        controls={false}
        playsInline={true}
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        onLoadedData={onLoadedData}
        onEnded={handleVideoEnded}
        paused={false}
        preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}


export default Video;