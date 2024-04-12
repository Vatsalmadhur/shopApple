import React, { useEffect, useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import { pauseImg, playImg, replayImg } from '../utils';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  })

  const [loadedData, setloadedData] = useState([])
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none'
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true
        }))
      }
    })
  })

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      }
      else
        startPlay && videoRef.current[videoId].play();
    }

  }, [startPlay, videoId, isPlaying, loadedData])

  const handleLoadedMetadata = (i, e) => setloadedData((pre) => [...pre, e]);




  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress()) *100;
          if (progress != currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 760 ? '10vw' : window.innerWidth < 1200 ? '10vw' : '4vw'
            })
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white'
            })
          }


        },
        onComplete: () => {
          gsap.to(videoDivRef.current[videoId],{
            width:'16px'
          })
          gsap.to(span[videoId],{
            backgroundColor:'#afafaf'
          })

        }
      })
      if(videoId === 0){
        anim.restart();
      }

      const animUpdate = anim.progress(videoRef.current[videoId] / hightlightsSlides[videoId].videoDuration)

      if(isPlaying){
        gsap.ticker.add(animUpdate)
      }
      else{
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay])

  const handleProcess = (type, i) => {
    switch (type) {
      case 'video-end':
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }))
        break;

      case 'video-last':
        setVideo((pre) => ({ ...pre, isLastVideo: true }))
        break;
      case 'video-reset':
        setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }))
        break;
      case 'play':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break;
      default:
        return video;
        break;


    }

  }


  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id}>
            <div className='relative sm:w-[70vw] sm:h-[50vh] w-[88vw] md:h-[70vh]  h-[35vh]'>
              <div className='w-full h-full flex-center rounded-3xl overflow-hidden'>
                <video src={list.video}
                  id='video'
                  playsInline={true}
                  muted
                  preload='auto'
                  ref={(el) => (videoRef.current[i] = el)}
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                  onPlay={(prevVideo) => ({
                    ...prevVideo,
                    isPlaying: true
                  })}
                ></video>
              </div>
              <div className="absolute top-10 left-[5%] text-start">
                {list.textLists.map((text) => (
                  <p key={text} >{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className='relative flex-center mt-10'>
        <div className='flex flex-center py-5 px-7 bg-gray-300 rounded-full backdrop-blur '>
          {videoRef.current.map((_, i) => (
            <span key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className='mx-2 w-4 h-4 rounded-full bg-gray-200 cursor-pointer relative'
            >
              <span className='w-full h-full absolute left-0 bg-gray-200 rounded-full' ref={(el) => (videoSpanRef.current[i] = el)}/>
            </span>
          ))}
        </div>
        <button className='bg-gray-300 rounded-full p-4 backdrop-blur'><img src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg} alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'} onClick={isLastVideo ? () => handleProcess('video-repeat') : !isPlaying ? handleProcess('play') : handleProcess('pause')} /></button>

      </div>
    </>
  )
}

export default VideoCarousel