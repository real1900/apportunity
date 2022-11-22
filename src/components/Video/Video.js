
import React, {
  useRef,
  useState, useEffect
} from "react";
import { isMobile } from 'react-device-detect';

import "./Video.css";
import desktopVideo from "../../assets/mp4/intro1080.mp4";
import tabletVideo from "../../assets/mp4/intro720.mp4";
import mobileVideo from "../../assets/mp4/intro360.mp4";
import blurImage from "../../assets/png/video/blur.jpg";

function Video() {

  const vidRef = useRef();

  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  // const handleToggleMute = () => setMuted(current => !current);
  // const [muted, setMuted] = useState(true);

  const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
  };

  const [shouldHideVideo, setShouldHideVideo] = useState(false);

  const getVideoSrc = width => {
    // if (width >= 1080) return desktopVideo;
    // if (width >= 720) return tabletVideo;
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

  useEffect(() => {
    // if (isMobile) {
    //   setShouldHideVideo(true);
    // }
    // // check if user agent is safari and we have the ref to the container <div />
    // if (isSafari() && vidRef.current) {
    //   // obtain reference to the video element
    //   const player = vidRef.current;

    //   // if the reference to video player has been obtained
    //   if (player) {
    //     // set the video attributes using javascript as per the
    //     // webkit Policy
    //     player.controls = false;
    //     player.playsinline = true;
    //     player.muted = true;
    //     player.setAttributee('webkit-playsinline', 'webkit-playsinline');
    //     player.setAttribute('muted', 'muted');// leave no stones unturned :)
    //     player.autoplay = true;

    //     // Let's wait for an event loop tick and be async.
    //     setTimeout(() => {
    //       // player.play() might return a promise but it's not guaranteed crossbrowser.
    //       const promise = player.play();
    //       // let's play safe to ensure that if we do have a promise
    //       if (promise.then) {
    //         promise
    //           .then(() => { })
    //           .catch((e) => {
    //             // if promise fails, hide the video and fallback to <img> tag
    //             vidRef.current.style.display = "none";
    //             setShouldHideVideo(true);
    //             alert(e);

    //           });
    //       }
    //     }, 0);
    //   }
    // }

  }, []);

  return shouldHideVideo ? (
    <div style={{ height: 0, width: 0 }} />
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