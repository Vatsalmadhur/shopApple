import React from 'react'
import { chipImg } from '../utils'

export const HowItWorks = () => {
  return (
    <section className='common-padding'>
    <div className='screen-max-width'>

        <div id="chip" className='flex-center w-f my-20'>
            <img src={chipImg} alt="" width={180} height={180}/>
        </div>
    </div>
    </section>
  )
}
