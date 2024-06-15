import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils'
import  {navLists} from '../constants'
export const Navbar = () => {
  return (
    <header className='w-full   flex justify-between items-center pt-5 sm:pt-0 px-4 sm:px-0 '>
        <nav className=' flex w-full screen-max-width justify-between px-2'>
            <img src={appleImg} alt="" width={16} height={18} />
            <div className='flex flex-1 justify-center max-sm:hidden my-5 gap-10 cursor-pointer text-gray-100'> {navLists.map((nav)=>(
                <div key={nav}>{nav}</div>
            ))} </div>
            <div className='flex justify-center gap-2 sm:gap-6 ' >
                <img src={searchImg} alt="" width={18} height={18} />
                <img src={bagImg} alt="" width={18} height={18} />
            </div>

        </nav>
    </header>
  )
}
