import React from 'react'
import { assets } from "../assets/assets"

const Hero = () => {
  return ( 
    <div className='flex flex-col sm:flex-row border border-gray-500'>

    {/**Leftside  */}

      <div className='w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='text-sm font-medium md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold md:text-base'>Shop Now</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/**Rightside image */}

      <img className='w-full sm:w-1/2' src={assets.model} alt=''/>
    </div>
  )
}

export default Hero