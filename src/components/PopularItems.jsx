import React from 'react'
import { FaStar } from 'react-icons/fa'
import {HiShoppingBag} from 'react-icons/hi'
const PopularItems = ({item}) => {
    return (<div className={`mb-5 xl:mb-0 relative bg-gradient-to-b flex items-center justify-between ${item?.color} ${item?.shadow} rounded-xl  px-5 pt-5 pb-1`}>
        <div className='z-20'>
            <h1 className='text-slate-200 font-medium text-[19px]'>{item?.title}</h1>
            <p className='text-slate-200 text-[16px] '>{item.text}</p>
            <div className='flex gap-6   items-center '>
                <p className='text-slate-900 text-[14px] font-semibold drop-shadow-xl bg-white/80 p-1 rounded-md'>${item.price }</p>
               <div className='flex  items-center'>
                 <FaStar className='text-slate-200   object-center' size={18} />
                <p className='text-slate-200 text-[15px] mt-[3px] ml-1'>{item.rating }</p>
                </div>
            </div>
            <div className='flex gap-3 my-2 items-center'>
                <HiShoppingBag size={30} className='bg-white/90 p-[2px] rounded-md' />
                <p className='text-slate-900 text-[14px] font-medium drop-shadow-xl bg-white/90 py-1 px-2 rounded-md'>{item.btn }</p>

            </div>
        </div>
        <div className=' absolute z-10 top-5 right-[5px] popularItemImg h-auto w-60'>
         <img src={item.img} className=' hover:rotate-0 hover:scale-105 hover:rotate-[-8deg] duration-[700ms]  w-full h-full object-contain rotate-[-35deg]' />
        </div>
  </div>
  )
}

export default PopularItems