import React from 'react'
import { PlayIcon } from "@heroicons/react/24/solid";
const Clip = ({imgsrc,clip}) => {
    return ( <div className='relative mb-4 group h-[68px] w-20 md:h-[120px] md:w-[130px] lg:h-28 lg:w-32 rounded-xl overflow-hidden  cursor-pointer transition-all duration-300'>
        <img
            src={imgsrc}
            alt="img/clips"
            className=' inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
        />
        <div className='bg-white/75 blur-effect-theme absolute  top-[38%] left-[38%] md:top-[30%] md:left-[30%]  opacity-100 z-[100] w-5 h-5 md:w-10 md:h-10 flex items-center justify-center rounded-full'>
            <PlayIcon className='icon-style w-3 h-3 md:w-6 md:h-6 text-slate-900' />
        </div>
        <video
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute top-0 left-0 right-0 flex h-full w-full object-cover rounded-xl group-hover:z-20 group-hover:opacity-100"
        >
            <source type='video/mp4' src={clip} />
        </video>
      </div>
  )
}

export default Clip