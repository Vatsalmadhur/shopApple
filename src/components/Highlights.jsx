import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to(".highlightsTitle", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to(".link", { opacity: 1, y: 0, delay: 1.5, stagger: 0.25 });
  }, []);
  return (
    <div id="highlights" className="w-screen overflow-hidden h-full common-padding  bg-zinc ">
      <div className="screen-max-width">
        <div className="w-[60vw] md:flex items-center justify-between my-10">
          <p className="highlightsTitle text-6xl text-start text-gray-100 opacity-0 translate-y-20 ">
            Get the highlights.
          </p>
          <div className="flex items-center gap-5 justify-start py-5 sm:py-0 w-screen sm:w-auto  ">
            <a href="" className="link">
              Watch the film
              <img src={watchImg} alt="" className="ml-2" />
            </a>
            <a href="" className="link">
              Watch the event
              <img src={rightImg} alt="" className="ml-2" />
            </a>
          </div>
        </div>
        <VideoCarousel />

      </div>
    </div>
  );
};

export default Highlights;
