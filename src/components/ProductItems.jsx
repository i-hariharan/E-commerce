import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';

const ProductItems = ({id, name, image, price}) => {
 
    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/E-commerce/product/${id}`}>
       <div className='overflow-hidden'>
         <img className='hover:scale-110 transition ease-in-out w-[250px] h-[300px] max-md:w-[200px] max-md:h-[200px]' src={image[0]} alt=''/>
       </div>
       <p className='pt-4 pb-2 text-sm'>{name}</p>
       <p className='font-medium text-lg'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems