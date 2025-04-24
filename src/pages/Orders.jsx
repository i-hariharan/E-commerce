import { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

export default function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title titleword1={"My"} titleword2={" Orders"} />
      </div>

      <div>
        {products.slice(5, 9).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center border-t border-b py-4 text-gray-700 gap-4"
          >
            <div className="flex items-start text-sm gap-5 ">
              <img src={item.image[0]} alt="" className="w-16 sm:w-20" />
              <div>
                <p className="font-medium sm:text-base">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency} {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-500">11 Dec 2023</span>
                </p>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2 max-md:gap-8">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-blue-400"></p>
                <p className="text-sm md:text-base">Ready to Ship</p>
              </div>
              <button className="border px-4 py-2 text-sm hover:bg-black hover:text-white font-medium rounded-sm">Track order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
