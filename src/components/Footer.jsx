import React from 'react'
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt=''/>
          <p className='w-full md:w-2/3 text-gray-700'>
          Stay Stylish Inside and out. we provide well organized collection with Affordable price respect to the brands.
          Explore the Latest fashion trends and must-haves, carefully curated just for you.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col text-gray-700 gap-2'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-700'>
            <li>+91 9182918291</li>
            <li>Eshoponline@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='text-center py-5 text-sm'>Copyrights 2024 @ E-shop.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer