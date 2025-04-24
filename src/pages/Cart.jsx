import { useContext, useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-3xl mb-3">
        <Title titleword1={"Your"} titleword2={" CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product.id === item.id);

          return (
            <div
              key={index}
              className="border-t border-b py-4 text-gray-900 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start  gap-6">
                <img
                  src={productData.image[0]}
                  alt=""
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-gray-200">{item.size}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm max-md:mb-7 max-md:flex-col">Quantity: <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number"min={1} defaultValue={item.quantity}/></p>
              <AiOutlineDelete size='25' onClick={() => updateQuantity(item.id,item.size,0)} className="w-4 sm:w-5 mr-4 max-md:mb-7 cursor-pointer"/>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-center">
            <button onClick={()=>navigate('/E-commerce/place-order')} className="text-sm bg-black text-white hover:scale-110 tansition ease-in my-8 px-4 py-3">Proceed</button>
          </div>
        </div>
      </div>
    
    </div>
  );
}
