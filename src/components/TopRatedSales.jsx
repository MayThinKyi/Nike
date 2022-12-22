import React from 'react'
import SaleItem from './SaleItem'

const TopRatedSales = ({toprateslaes:{title,items}}) => {
    return (<div className='px-5 sm:px-10 lg:px-10 xl:px-20'>
    <h1 className='mb-5 text-slate-900 drop-shadow-lg shadow-slate-900 filter font-bold text-3xl sm:text-4xl md:text-5xl'>{title}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
             {items?.map((item, i) => {
        return <SaleItem item={item} />
    })}
       </div>
  </div>
  )
}

export default TopRatedSales