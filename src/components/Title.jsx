import React from 'react'

const Title = ({titleword1, titleword2}) => {
  return (
    <div className='inline-flex items-center mb-3 gap-3'>
      <p className='text-gray-500'>{titleword1}<span className='text-gray-700 font-medium'>{titleword2}</span></p>
      <p className='w-8 sm:w-11 h-[2px] sm:h-[2px] bg-gray-700'></p> 
    </div>
  )
}

export default Title