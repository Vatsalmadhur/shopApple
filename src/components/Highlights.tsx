import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";

const Highlights = () => {
    useGSAP(()=>{
        gsap.to('.highlightsTitle',{opacity:1,y:0,delay:1.5})

    },[])
  return (
    <div id="highlights" className="w-full overflow-hidden h-screen bg-zinc">
      <div className="h-full">
        <p className="highlightsTitle text-3xl text-start opacity-0 translate-y-20">Get the highlights</p>
      </div>
    </div>
  );
};

export default Highlights;
