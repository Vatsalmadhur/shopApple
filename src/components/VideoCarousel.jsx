import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils';

const VideoCarousel = () => {
  const videoRef=useRef([]);
  const videoSpanRef=useRef([]);
  const videoDivRef=useRef([]);

  const [video,setVideo]=useState({
    isEnd:false,
    startPlay:false,
    videoId:0,
    isLastVideo:false,
    isPlaying:false 
  })

const [loadedData, setloadedData] = useState([])
const {isEnd,startPlay,videoId,isLastVideo,isPlaying}=video;

  useEffect(()=>{
    if(loadedData.length > 3){
      if(!isPlaying){
        videoRef.current[videoId].pause();
      }
      else 
      startPlay && videoRef.current[videoId].play();
    }

  },[startPlay,videoId,isPlaying,loadedData])


  useEffect(()=>{
    const currentProgress=0;
    let span = videoSpanRef.current;

    if(span[videoId]){
      let anim = gsap.to(span[videoId],{
        onUpdate: ()=>{

        },
        onComplete: ()=>{

        }
      })
    }

  },[videoId,startPlay])

  const handleProcess=(type,i)=>{
switch(type){
case 'video-end':
  setVideo((pre)=>({...pre,isEnd:true,videoId:i+1}))
  break;

  case 'video-last':
    setVideo((pre)=>({...pre,isLastVideo:true}))
    break;
    case 'video-reset':
    setVideo((pre)=>({...pre,isLastVideo:false,videoId:0}))
    break;
    case 'play':
      setVideo((pre)=>({...pre,isPlaying:!pre.isPlaying}))
      break;
      default:
        return video;
        break;


}

  }


  return (
    <>
    <div className='flex items-center'>
    {hightlightsSlides.map((list,i)=>(
      <div key={list.id}>
        <div className='relative sm:w-[70vw] sm:h-[50vh] w-[88vw] md:h-[70vh]  h-[35vh]'>
          <div className='w-full h-full bg-red-500 flex-center rounded-3xl overflow-hidden'>
            <video src={list.video} 
            id='video' 
            playsInline={true} 
            muted 
            preload='auto'
            ref={(el)=>(videoRef.current[i]= el )}
            onPlay={(prevVideo)=>({
              ...prevVideo,
              isPlaying:true
            })}
            ></video>
          </div>
          <div className="absolute top-10 left-[5%] text-start">
            {list.textLists.map((text)=>(
              <p key={text} >{text}</p>
            ))}
          </div>
        </div>
      </div>
    ))}
    </div>
    

    <div className='relative flex-center mt-10'>
      <div className='flex-cent py-5 px-7 bg-gray-300 rounded-full backdrop-blur'>
        {videoRef.current.map((_,i)=>(
          <span key={i} 
          ref={(el)=>(videoDivRef.current[i]=el)} 
          className='mx-2 w-3 h-3 bg-red-200 relative'
          >
            <span className='w-full h-full absolute rounded-full' ref={(el)=>(videoSpanRef.current)}></span>
          </span>
        ))}
      </div>
      <button className='bg-gray-300 rounded-full p-4 backdrop-blur'><img src={isLastVideo ? replayImg : !isPlaying ? playImg:pauseImg} alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'} onClick={isLastVideo ? ()=>handleProcess('video-repeat') : !isPlaying ? handleProcess('play') : handleProcess('pause')} /></button>

    </div>
    </>
  )
}

export default VideoCarousel