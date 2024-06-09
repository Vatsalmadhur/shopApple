import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { smallHeroVideo,heroVideo } from "../utils";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#heroText", { opacity: 1, delay: 1});
    gsap.to('#cta',{opacity:1,y:-50,delay:1})
  }, []);

  const [videoSrc,setVideoSrc]=useState(window.innerWidth<760 ? smallHeroVideo : heroVideo)

  const handleVideoSrc=()=>{
    if( window.innerWidth < 760){
        setVideoSrc(smallHeroVideo)
    }
    else{
        setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrc);
    return () => {
        window.removeEventListener('resize',handleVideoSrc)
    }

  },[])
  return (
    <div className="w-full  h-[100vh]">
      <div className="h-5/6 w-full flex items-center justify-center flex-col">
        <p id="heroText" className="text-3xl  text-gray-100 opacity-0 pb-10 font-medium">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12 pointer-events-none"><video src={videoSrc} muted playsInline={true} autoPlay key={videoSrc} ></video></div>
      </div>
      <div id="cta" className=" flex flex-col items-center opacity-0 ">
        <a href="#highlights"  className="btn">Buy</a>
        <p>From $199/month or $999</p>
      </div>
    </div>
  );
};

export default Hero;
