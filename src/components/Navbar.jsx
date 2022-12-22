import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import {RiShoppingBagFill} from 'react-icons/ri'
const Navbar = () => {
  return (<div className='h-[60px] z-[999] w-full px-5 sm:px-[100px] bg-white/80 shadow-md text-slate-900 fixed top-0 left-0 right-0 flex justify-between'>
      <img src={logo} className='z-20 w-[80px] object-contain brightness-0 ' />
      <div class='flex items-center text-2xl font-medium gap-4'>
          <AiOutlineSearch />
          <MdOutlineFavoriteBorder/>
          <RiShoppingBagFill/>
      </div>
    </div>
  )
}

export default Navbar