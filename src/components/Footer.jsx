import React from 'react'

const Footer = ({footerAPI:{titles,links}}) => {
  return (<div className='px-5 md:px-20 mx-auto xl:px-30 py-5 bg-gradient-to-b bg-theme text-slate-200'>
      <div className='grid grid-cols-3  gap-x-5 gap-y-1'>
          {titles?.map((t, i) => {
              return <p className='my-4 text-[15px] md:text-[19px] font-semibold'>{t.title}</p>
          })}
          {links?.map((link, i) => {
             return link.map((l, i) => {
                  return <p className='text-[13px]  md:text-[16px] py-[2px]'>{l.link }</p>
              })
          })}
      </div>
      <h1 className='text-center text-[14px]  md:text-[16px] mt-10'>Copyright© All Reserved Rights Nike 2023</h1>
    </div>
  )
}

export default Footer