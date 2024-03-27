import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";

const Highlights = () => {
  useGSAP(() => {
    gsap.to(".highlightsTitle", { opacity: 1, y: 0, delay: 1.5 });
    gsap.to(".link", { opacity: 1, y: 0, delay: 1.5,stagger:0.25 });
  }, []);
  return (
    <div id="highlights" className="w-full overflow-hidden h-screen bg-zinc">
      <div className="w-full md:flex items-center justify-between">
        <p className="highlightsTitle text-3xl text-start opacity-0 translate-y-20">
          Get the highlights
        </p>
        <div className="flex items-center gap-5 justify-center ">
          <a href="" className="link border-2 border-red-50">
            Watch the film
            <img src={watchImg} alt="" className="ml-2" />
          </a>
          <a href="" className="link">
            Watch the event
            <img src={rightImg} alt="" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
