import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems';
import Title from "./Title";

const Relevantproducts = ({category, subCategory}) => {
  
    const {products} = useContext(ShopContext);
    const [relevant, setRelevant] = useState([]);

    useEffect(()=>{
        
        if(products.length > 0){
            
            let productscopy = products.slice();
            productscopy = productscopy.filter((item)=> category === item.category);
            productscopy = productscopy.filter((item) => subCategory === item.subCategory);
            setRelevant(productscopy.slice());

        }
    },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title titleword1={'Relevant'} titleword2={' Products'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {relevant.map((item,index) => (
        <ProductItems key={index} id={item.id} name={item.name} image={item.image} price={item.price} />
      ))
      }
      </div>
    </div>
  )
}

export default Relevantproducts