import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  
    const {currency, delivery_fee , getCartAmount} = useContext(ShopContext);

  return (
    
    <div className='w-full items-center'>
      <div className='text-2xl'>
        <Title titleword1={'Cart'} titleword2={' TOTAL'}/>
      </div>
      <div className='flex flex-col gap-2 text-sm mt-2'>
        <div className='flex justify-between'>
          <p>Sub-Total</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Total</p>
          <p>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal