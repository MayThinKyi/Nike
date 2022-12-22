import React from 'react'
import PopularItems from './PopularItems'

const PopularSales = ({popularsales:{title,items}}) => {
    return (<div className='md:mt-[180px] lg:my-20 mt-[100px] px-5 sm:px-10 xl:px-20'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-slate-900 font-bold drop-shadow-xl'>{title}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-8 justify-between'>
             {items?.map((item, i) => {
            return <PopularItems item={item} />
        })}
       </div>
  </div>
  )
}

export default PopularSales