import React, { useRef } from 'react'
import ModelView from './ModelView'
import { useState } from 'react'
import { yellowImg } from '../utils'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from '../constants'
const Model = () => {
  const [size, setSize] = useState('small')
  const [model, setModel] = useState({
    title:'iPhone 15 pro',
    color:['#8f8a81','#ffe7b9','#6f6c64'],
    image: yellowImg
  })

  //camera control
  const cameraControlSmall=useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);


  useGSAP(()=>{
    gsap.to('#heading',{y:0,opacity:1})
  })
  return (
    <section>
      <div className="screen-max-width">
        <h1 id='heading' className='opacity-0'>Take a closer look</h1>
      </div>

      <div className="flex flex-col items-center mt-5">
        <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative '>
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
          className='w-full h-full '
          style={{position:'fixed',top:0,bottom:0,right:0,left:0,overflow:'hidden'}}
          eventSource={document.getElementById('root')}
          >
          <View.Port/>
          </Canvas>

          <div className="w-full mx-auto" >
            <p className='text-sm font-light text-center'>{model.title}</p>

            <div className="flex-center">
              <ul className='color-container'>{models.map((item,i)=>(
                <li className='w-6 h-6 rounded-full mx-2 cursor-pointer' key={i} style={{backgroundColor:item.color[0]}} onClick={()=>setModel(item)}/>
              ))}</ul>

              <button className='flex item-center justify-center bg-gray-300 rounded-full p-1 gap-1 backdrop-blur-1'>{sizes.map(({label,value})=>(
                <span key={label} className='rounded-full p-2 text-sm bg-white transition-all' style={{backgroundColor: size===value ?'white' : 'transparent',color: size===value ?'black' : 'white'}} onClick={()=>setSize(value)}>{label}</span>

              ))} </button>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Model