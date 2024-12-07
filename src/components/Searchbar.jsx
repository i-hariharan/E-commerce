import React, { useContext, useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Searchbar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [searchVisible, setSearchVisible] = useState(false);

    useEffect(()=>{

        if(location.pathname.includes('collection')){
            setSearchVisible(true);
        }
        else{
            setSearchVisible(false);
        }

    },[location])

  return showSearch && searchVisible ? (

    <div className='text-gray-100 border-t border-b text-center'>
      <div className='inline-flex justify-center items-center border border-gray-800 px-5 py-2 mx-5 my-5 w-3/4 sm:1/2 rounded-full'>
        <input type={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' className='flex-1 text-black outline-none bg-inherit text-sm'/>
        <IoSearch size='20' className='text-black w-4 cursor-pointer hover:scale-110 transition ease-in-out' />
      </div>
      <RxCross2 size='20' className='text-black inline w-6 cursor-pointer'
        onClick={() => setShowSearch(false)}/>
    </div>
  
  )
  :null
}

export default Searchbar