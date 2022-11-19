
import React, { useRef,
   useState, useEffect
   } from "react";


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
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);

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
    const section = document.querySelector('#home');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    vidRef.current.currentTime = 15;
  };

  const src = getVideoSrc(window.innerWidth);

  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => { })
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  return shouldUseImage ? (
    <img src={blurImage} alt="Muted Video" />
  ) : (
      <div
        className="container"
        ref={videoParentRef}>     
      <img
        src={blurImage}
        className="video-thumb tiny"
        alt="thumb"
        style={{ opacity: isVideoLoaded ? 0 : 1 }}/>
        
      <video id="videoBG"
        onClick={handlePlayPress}
        ref={{vidRef}}
        muted
        autoPlay
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        onLoadedData={onLoadedData}
        onEnded={handleVideoEnded}
          paused={false}
          playInBackground={true}
          playWhenInactive={true}
          ignoreSilentSwitch="ignore"
        playsinline
        preload="metadata">
         <source src={src} type="video/mp4" />
    </video>
    </div>
  );
}


export default Video;