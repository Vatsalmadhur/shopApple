import React, { useEffect, useRef } from "react";
import ModelView from "./ModelView";
import { useState } from "react";
import { yellowImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { models, sizes } from "../constants";
import { View } from "@react-three/drei";
import { animateWithGsapTimeline } from "../utils/animations";
const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 pro",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  //camera control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

const tl = gsap.timeline();

useEffect(()=>{
  if(size==='large'){
    animateWithGsapTimeline(tl,large,largeRotation,"#view1","#view2",{
      transform:'translateX(-100%)',
      duration:2
    })
  }

  if(size==='small'){
    animateWithGsapTimeline(tl,small,smallRotation,"#view2","#view1",{
      transform:'translateX(0)',
      duration:2
    })
  }
})

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="opacity-0 text-6xl text-gray-100">
          Take a closer look.
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5 h-auto">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative ">
          <ModelView
            index={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationState={smallRotation}
            item={model}
            size={size}
          />
          <ModelView
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationState={largeRotation}
            item={model}
            size={size}
          />

          <Canvas
            className="w-full h-full "
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: "hidden",
            }}
            eventSource={document.getElementById("root")}
          >
            <View.Port />
            {/* <View.Port/> */}
          </Canvas>
        </div>

        <div className="w-full mx-auto">
          <p className="text-sm font-light text-center">{model.title}</p>

          <div className="flex-center">
            <ul className="color-container">
              {models.map((item, i) => (
                <li
                  className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                  key={i}
                  style={{ backgroundColor: item.color[0] }}
                  onClick={() => setModel(item)}
                />
              ))}
            </ul>

            <button className="flex item-center justify-center bg-gray-300 rounded-full p-1 gap-1 backdrop-blur-1">
              {sizes.map(({ label, value }) => (
                <span
                  key={label}
                  className="rounded-full p-2 text-sm bg-white transition-all"
                  style={{
                    backgroundColor: size === value ? "white" : "transparent",
                    color: size === value ? "black" : "white",
                  }}
                  onClick={() => setSize(value)}
                >
                  {label}
                </span>
              ))}{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
