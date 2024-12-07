
import { useContext, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {

    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between font-medium py-5">
      <img src={assets.logo} alt="" className="w-32"/>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/E-commerce" className="flex flex-col gap-1 items-center">
          <p>Home</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/E-commerce/collection" className="flex flex-col gap-1 items-center">
          <p>Collection</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/E-commerce/about" className="flex flex-col gap-1 items-center">
          <p>About</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/E-commerce/contact" className="flex flex-col gap-1 items-center">
          <p>Contact</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <IoSearchOutline size="25" className="cursor-pointer" onClick={()=>setShowSearch(true)}/>

        <div className="group relative">
          <Link to='/E-commerce/login'><CgProfile size="25" className="cursor-pointer" /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-5">
            <div className="flex flex-col gap-3 w-36 px-5 py-3 bg-slate-100 text-gray-600 rounded">
              <p className="hover:text-black cursor-pointer">Profile</p>
              <p className="hover:text-black cursor-pointer">Orders</p>
              <p className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>

       <Link to='/E-commerce/cart' className='relative'>
         <BsCartCheck size='20' className='cursor-pointer'/>
         <p className="absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[10px]">
         {getCartCount()}</p>
       </Link>

       <TiThMenu size='25' className="cursor-pointer lg:hidden md:hidden" onClick={() => setVisible(true)}/>
      </div>

      {/**Navbar for sm-screens */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full' :'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center p-3 gap-2 cursor-pointer" onClick={() => setVisible(false)}>
            <IoIosArrowDropleft size='20' className="cursor-pointer"/>
            <p>Back</p>
          </div>
          <NavLink to='/E-commerce' onClick={() => setVisible(false)} className='pl-8 py-3'>Home</NavLink>
          <NavLink to='/E-commerce/collection' onClick={() => setVisible(false)} className='pl-8 py-3'>Collections</NavLink>
          <NavLink to='/E-commerce/about' onClick={() => setVisible(false)} className='pl-8 py-3'>About</NavLink>
          <NavLink to='/E-commerce/contact' onClick={() => setVisible(false)} className='pl-8 py-3'>Contact</NavLink>
        </div>
      </div>

    </div>
  );
}
