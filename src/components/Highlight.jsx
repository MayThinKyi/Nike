import React from 'react'

const Highlight = ({highlight:{heading,title,text,btn,url,img}}) => {
    return (<div className='my-20 flex flex-wrap text-center lg:text-start lg:flex-nowrap justify-between items-center px-0 sm:px-5 xl:px-20  '>
    <img src={img} className=' order-2 lg:order-1 mt-2 sm:mt-10 px-7 sm:px-0 lg:mt-0 mx-auto lg:text-start  w-[450px] h-full object-cover' />

      <div className='order-1 lg:order-2 flex px-2 sm:px-5 lg:px-10 flex-col justify-center'>
        <h1 className='text-blue-500 font-bold text-xl sm:text-2xl md:text-3xl'>{heading}</h1>
        <h1 className='text-slate-900 drop-shadow-xl font-bold text-3xl sm:text-4xl md:text-5xl'>{title}</h1>
        <p className='text-slate-800 my-3'>{text}</p>
        <div className=' text-center lg:text-start my-3'>
          <a href={url} target="_blank">
          <button className='bg-slate-900 drop-shadow-2xl shadow-slate-900 text-slate-100 rounded-md px-10 py-2'>{ btn}</button>
        </a>
        </div>
      </div>
     
  </div>
  )
}

export default Highlight