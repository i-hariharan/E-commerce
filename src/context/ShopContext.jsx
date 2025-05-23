import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 15;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {

        if(!size){
            toast.error('Please Select Size')
        }

        let cartData= structuredClone(cartItems);

        if(cartData[itemId]){
             if(cartData[itemId][size]){
                  cartData[itemId][size] += 1;
             }
             else{
                cartData[itemId][size]  = 1;
             }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () => {

        let totalcount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalcount += cartItems[items][item];
                    }
                }catch(error)
                {
            }
            }
        }
        return totalcount; 
    }

    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);        
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product.id === items);
            for(const item in cartItems[items]){
                try{
                       if(cartItems[items][item] > 0){
                          totalAmount += itemInfo.price * cartItems[items][item];
                       }
                }catch(error){

                }
            }
        }    
        return totalAmount;
    }

    useEffect(() => {
        console.log(cartItems);
    },[cartItems])

    const value = {

        products, currency, delivery_fee,search,setSearch,showSearch,setShowSearch,
        cartItems, addToCart, getCartCount,updateQuantity,getCartAmount,navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;