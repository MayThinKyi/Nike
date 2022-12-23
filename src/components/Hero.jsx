import React from 'react'
import Clip from './Clip'

const Hero = ({ heroapi: { title, subtitle, img, btntext, videos, sociallinks } } ) => {
 
    return (<div className=' relative'>
      <div className='clip-path px-5 sm:px-0 py-5 pt-[100px]  z-10 pb-[220px] md:pb-[500px] lg:pb-[250px] bg-theme transitions-theme flex flex-col items-center justify-center'>
      <h1 className='text-slate-200 drop-shadow-lg  md:text-5xl sm:text-4xl text-3xl  font-bold '>{title}</h1>
      <h1 className='text-slate-200 drop-shadow-lg  md:text-5xl sm:text-4xl text-3xl font-bold '>{subtitle}</h1>
      <button className='outline-none button-theme bg-slate-200 shadow-lg  shadow-slate-200 rounded-xl my-5'>{btntext}</button>
        </div>
        <div className=' mt-[-180px] md:mt-[-450px] lg:mt-[-200px] flex justify-center ml-5'>
             <img src={img} className=' h-[45vh] lg:h-[45vh] md:h-[31vh] sm:h-[21vh] h-[19vh] duration-1000 w-auto rotate-[-25deg] hover:rotate-0' />
        </div>
        <div className='flex flex-col clipContainer  absolute top-[63%] left-[5%] md:top-[50%] md:left-[5%] lg:top-[36%] lg:left-[18%] '>
          {videos?.map((val, i) => (
                <Clip
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
        </div>
       <div className='absolute top-[55%] sm:top-[60%] lg:top-[40%] right-[3%]'>{sociallinks?.map((s) => {
        return <img src={s.icon} className='w-[30px] h-[30px] object-cover mb-3' />
    })
    }</div>
  </div>
  )
}

export default Hero