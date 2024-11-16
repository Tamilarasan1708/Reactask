import React from 'react'

const Cards = ({value,title,detail,icon,iconbg,bg}) => {
  return (
    <div className={`border   rounded-md p-3 ${bg}`}>
    <div className='flex flex-col space-y-5'>
    <div className={`flex items-center justify-center w-7 h-7 ${iconbg} rounded-lg `}>
          {icon}
          
        </div>
        <span className='flex flex-col'>
          <h2 className='text-sm font-bold'>{value}</h2>
          <h3 className='text-[11px] font-normal'>{title}</h3>
          <h3 className='text-[10px] text-blue-600'>{detail}</h3>
          </span>
  
   
   </div>
  </div>
  )
}

export default Cards