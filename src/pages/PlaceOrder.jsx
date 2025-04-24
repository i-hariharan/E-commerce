
import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import { ShopContext } from "../context/ShopContext";

export default function PlaceOrder() {

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-row max-md:flex-col max-md:gap-20 justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
    {/**left-side */}    
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title titleword1={'Delivery'} titleword2={' Details'}/>
        </div>
      
        <input type='text' placeholder='First-name' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
        <input type='text' placeholder='Last-name' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
        <input type='email' placeholder='Email-Address' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
        <input type='text' placeholder='Residential-Address ' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
        <div className='flex gap-4'>
          <input type='text' placeholder='City' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
          <input type='text' placeholder='State' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <div className='flex gap-4'>
          <input type='number' placeholder='Zip-code' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
          <input type='text' placeholder='Country' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type='number' placeholder='Phone' className='border border-gray-400 rounded py-1.5 px-3.5 w-full'/>
    
      </div>

      {/**right-side */}
      <div className='my-3'>
        <div className=' min-w-80'>
          <CartTotal />
        </div> 

        <div className='mt-12'>
          <Title titleword1={'Payment'} titleword2={' Options'}/>
          {/**payment options */}
          <div className='flex flex-col lg:flex-row gap-4'>

            <div onClick={()=>setMethod('stripe')} className='flex items-center border p-2 px-3 gap-4 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-600':''}`}></p>
              <img src={assets.gpay} alt='' className='w-16 h-16'/>
            </div>
        
            <div onClick={()=>setMethod('razorpay')} className='flex items-center border p-2 px-3 gap-4 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-600':''}`}></p>
              <img src={assets.razorpay} alt='' className='w-16 h-16'/>
            </div>

            <div onClick={()=>setMethod('cod')} className='flex items-center border p-2 px-3 gap-4 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-600':''}`}></p>
              <p className="text-md text-gray-800 font-weight">Cash on Delivery</p>
            </div>

          </div>

          <div className="w-full text-center mt-7">
            <button onClick={()=>navigate('/E-commerce/orders')} className="bg-black text-white text-sm px-16 py-3">Place Order</button>
          </div>

        </div>

      </div>
    </div>
  )
}
