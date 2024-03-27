import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import  {navLists} from '../constants'
export const Navbar = () => {
  return (
    <header className='w-full py-5 px-5 flex justify-between items-center  '>
        <nav className=' flex w-full screen-max-width'>
            <img src={appleImg} alt="" width={14} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden my-5 border-2 border-red-200'> {navLists.map((nav)=>(
                <div key={nav}>{nav}</div>
            ))} </div>
            <div>
                <img src={searchImg} alt="" width={18} height={18} />
                <img src={bagImg} alt="" width={18} height={18} />
            </div>

        </nav>
    </header>
  )
}
