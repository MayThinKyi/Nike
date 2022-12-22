import React from 'react'
import { AiFillHeart, AiOutlineClockCircle } from 'react-icons/ai'
import { BsHash } from 'react-icons/bs'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
const Stories = ({ story: { title, news } }) => {
   
    return (<div className='px-5  mb-[100px] md:px-10 xl:px-20'> 
          <h1 className='mb-10 text-slate-900 drop-shadow-lg shadow-slate-900 filter font-bold text-3xl sm:text-4xl md:text-5xl'>{title}</h1>
        <div className=' '>
 <Splide options={{
    rewind: true,
    isNavigation: true,
    gap: '15px',
    pagination: false,
    breakpoints: {
          1280: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
  } } >
      {news?.map((n, i)=>{
          return <SplideSlide key={i} className='bg-white rounded-lg border border-slate-200 filter shadow-2xl flex flex-col flex-wrap'>
              <img src={n.img} className='rounded-t-lg' />
              <div className='flex flex-col justify-center px-3 py-5'>
                  <div className='flex items-center flex-nowrap gap-3'>
                      <div className='flex items-center flex-nowrap'>
                      <AiFillHeart size={20} className='text-red-600' /><span className='whitespace-nowrap text-slate-900 text-[14px] font-semibold '>{n.like }</span>
                        </div>
                      <div className='flex items-center flex-nowrap'>
                      <AiOutlineClockCircle size={15} /><span className='whitespace-nowrap text-slate-900 font-semibold text-[14px]'>{n.time}</span>
                        </div>
                      <div className='flex items-center flex-nowrap'>
             <BsHash size={20} className='text-blue-500' /><span className='whitespace-nowrap text-blue-500 font-semibold text-[15px]'>{n.by}</span>
                        </div>
                  </div>
                  <h1 className='text-slate-900 font-semibold mt-3'>{n.title}</h1>
                  <div>
                      <p className='text-[14px] text-slate-900'>{n.text }</p>
                  </div>
                  <a href={n.url} className='mt-5' target='_blank'>
                      <button className='bg-slate-900 filter shadow-lg shadow-slate-900 text-slate-100 py-1 px-8 rounded-md'>{n.btn }</button>
                  </a>
              </div>
          </SplideSlide>
      })}
    </Splide>
        </div>
       
    </div>
  )
}

export default Stories