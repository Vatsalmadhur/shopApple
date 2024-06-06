import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { animateWthGsap } from '../utils/animations'

export const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWthGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })

  }, [])
  return (
    <section className='common-padding'>
      <div className='screen-max-width'>

        <div id="chip" className='flex-center w-f my-20'>
          <img src={chipImg} alt="" width={180} height={180} />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-4xl md:text-7xl font-semibold text-center'>A17 Pro. <br />A monster win for gaming.</h2>
          <p className=" text-gray font-semibold text-xl md:text-2xl py-10 text-center">Its here. The biggest redesigns in the history of Apple GPUs.</p>
        </div>

        <div className="mt-10 md:mt20 mb-14">
          <div className="relative h-full  flex-center ">
            <div className="overflow-hidden">
              <img src={frameImg} alt="" className='bg-transparent relative z-10' />
            </div>

            <div className="absolute w-[95%] h-[90%] rounded-[40px] overflow-hidden">
              <video src={frameVideo} playsInline muted autoPlay ref={videoRef} className='pointer-events-none'></video>
            </div>

          </div>
          <p className=' text-gray font-semibold text-center mt-3'  >Honkai:Star Rails</p>


          <div className="hiw-text-container">
            <div className="flex flex-1 justify-center flex-col">
              <p className="hiw-text g_fadeIn">
                A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                <span className="text-white">
                  best graphic performance by far
                </span>.
              </p>

              <p className="hiw-text g_fadeIn">
                Mobile {' '}
                <span className="text-white">
                  games will look and feel so immersive
                </span>,
                with incredibly detailed environments and characters.
              </p>
            </div>


            <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-text">New</p>
              <p className="hiw-bigtext">Pro-class GPU</p>
              <p className="hiw-text">with 6 cores</p>
            </div>
          </div>
          {/* </div> */}

        </div>
      </div>
    </section>
  )
}
