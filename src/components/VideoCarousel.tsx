import React from 'react'
import { hightlightsSlides } from '../constants'

const VideoCarousel = () => {
  return (
    <>
    <div className='flex items-center'>
    {hightlightsSlides.map((list,i)=>(
      <div key={list.id}>
        <div className='relative sm:w-[70vw] sm:h-[50vh] w-[88vw] md:h-[70vh]  h-[35vh]'>
          <div className='w-full h-full bg-red-500 flex-center rounded-3xl overflow-hidden'>
            <video src={list.video} id='video' playsInline={true} muted preload='auto'></video>
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
    </>
  )
}

export default VideoCarousel