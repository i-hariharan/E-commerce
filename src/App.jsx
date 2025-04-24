import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[6vw] lg:px-[9vw] max-md:pb-20">
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/E-commerce' element={<Home />}/>
        <Route path='/E-commerce/about' element={<About />}/>
        <Route path='/E-commerce/cart' element={<Cart />}/>
        <Route path='/E-commerce/collection' element={<Collection />}/>
        <Route path='/E-commerce/contact' element={<Contact />}/>
        <Route path='/E-commerce/login' element={<Login />}/>
        <Route path='/E-commerce/orders' element={<Orders />}/>
        <Route path='/E-commerce/place-order' element={<PlaceOrder />}/>
        <Route path='/E-commerce/product/:productId' element={<Product />}/>
      </Routes>
      <Footer />
    
    </div>
  )
}

export default App
