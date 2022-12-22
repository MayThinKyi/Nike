import React from 'react'
import { FaStar } from 'react-icons/fa'
import { HiShoppingBag } from 'react-icons/hi'

const SaleItem = ({item}) => {
    return (<div className={`mb-5 sm:mb-0 hover:scale-105 duration-[800ms] rounded-lg px-5 pt-5 pb-1 bg-gradient-to-b flex flex-col ${item.color} ${item.shadow}`}>
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
            <div className='flex gap-3 mt-2 items-center'>
                <HiShoppingBag size={30} className='bg-white/90 p-[2px] rounded-md' />
                <p className='text-slate-900 text-[14px] font-medium drop-shadow-xl bg-white/90 py-1 px-2 rounded-md'>{item.btn }</p>

            </div>
        </div>
        <div className=' mt-3 mx-auto'>
         <img src={item.img} className=' hover:rotate-[-15deg] hover:scale-105 duration-[700ms]  w-full h-full object-contain rotate-0' />
        </div>
  </div>
  )
}

export default SaleItem