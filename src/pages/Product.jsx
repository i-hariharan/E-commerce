import { useContext, useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Relevantproducts from '../components/Relevantproducts';
import { ShopContext } from '../context/ShopContext';

export default function Product() {

  const {productId} = useParams();
  const  {products, currency, addToCart} = useContext(ShopContext);
  const [productdata, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchproductdata = async () => {

    products.map((item) => {
      if(item.id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchproductdata();
  },[productId]);

  return productdata ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/**product data */}
      <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>
        {/**product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            productdata.image.map((item, index)=>(
              <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt=''
              onClick={() => setImage(item)}/>
            ))
          }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt=''/>
          </div>
        </div>
        {/**product info */}
        <div className='flex-1'>
          <h1 className='text-2xl font-medium t-3'>{productdata.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <FaStar size='20' className='w-3 5'/>
            <FaStar size='20' className='w-3 5'/>
            <FaStar size='20' className='w-3 5'/>
            <FaStar size='20' className='w-3 5'/>
            <FaStar size='20' className='w-3 5'/>
            <p className='pl-3'>(52)</p>
          </div>
          <p className='text-3xl font-medium mt-5'>{currency}{productdata.price}</p>
          <p className='text-lg text-gray-600 md:w-4/5 mt-5'>{productdata.description}</p>
          <div className='flex flex-col gap-4 my-7'>
            <p className='text-lg font-medium'>Select Size</p>
            <div className='flex gap-2'>
            {productdata.sizes.map((item,index)=>(
                 <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-black' : ''}`} key={index}>{item}</button> 
            ))}
            </div>
          </div>
          <button onClick={() => addToCart(productdata.id, size)} className='bg-black text-white text-sm px-8 py-3 active:bg-gray-600 hover:scale-110 transition ease-in'>Add to Cart</button>
          <hr className='mt-10 sm:w-4/5'/>
          <div className='flex flex-col text-gray-800 text-sm mt-10 gap-1'>
           <p>Best Quality</p>
           <p>Cash on Delivery(COD) is Available in this Product</p>
           <p>Easy return and exchange policy within 7 working-Days</p>
          </div>
        </div>
      </div>

      {/**relevant products */}
      <Relevantproducts category={productdata.category} subCategory={productdata.subCategory}/>
      
    </div>
  )
  : <div className='opacity-0'></div>
}
