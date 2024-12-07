import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems';
import Title from './Title';

const Topsellers = () => {

    const {products} = useContext(ShopContext);
    const [topseller, setTopSeller] = useState([]);

    useEffect(() => {
        //const bestproduct = products.filter((item) => (item.topseller));
        setTopSeller(products.slice(0,5)); 
    },[]);

  return (
    
    <div className='my-10 max-md:pb-10'>
      <div className='py-8 text-center text-3xl'>
        <Title titleword1={'TOP'} titleword2={' Sellers'}/>
        <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-black max-md:text-justify max-md:pb-5'>
        Let's have a visit to our Latest collections of Costumes and experience a mannly look within Affordable limits</p>
      </div>

      {/**ProductItems Rendering */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5'>
      {
        topseller.map((item,index) => (
          <ProductItems key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
        ))
      }
      </div>
    </div>

  )
}

export default Topsellers