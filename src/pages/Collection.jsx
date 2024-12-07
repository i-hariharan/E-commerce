import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import ProductItems from "../components/ProductItems";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

export default function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortby, setSortBy] = useState('relevant')

  const togglecategory = (e) => {
    
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubcategory = (e) => {
    
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const ApplyFilter = () => {

    let productscopy = products.slice();

    if(search && showSearch){
      productscopy = productscopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length > 0){
      productscopy = productscopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length > 0){
      productscopy = productscopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productscopy);
  
  }

  const sortpproducts = () => {

    let fltrProductscopy = filterProducts.slice();

    switch(sortby){
      
      case "Low to High":
        setFilterProducts(fltrProductscopy.sort((a,b) => (a.price-b.price)));
        break;
      
      case "High to Low":
        setFilterProducts(fltrProductscopy.sort((a,b) => (b.price-a.price)));
        break;

      default:
        ApplyFilter();
        break;

    }

  }

  useEffect(() => {
    
    ApplyFilter();

  },[category,subCategory, search, showSearch]);

  useEffect(() => {

    sortpproducts();

  },[sortby])

  return (
    <div className="flex flex-col sm:flex-row sm:gap-10 gap-2 border-t">
      {/**Filter */}
      <div className="min-w-60">
        <p
          className="flex items-center my-2 text-2xl gap-2 cursor-pointer text-gray-800"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTER
          <IoIosArrowDropdown
            size="10"
            className={`h-10 w-5 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/**filter for category */}
        <div
          className={`border border-gray-400 rounded-lg pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm font-medium mb-3 ">Categories</p>
          <div className="flex flex-col text-sm font-light text-gray-700 gap-2">
            <p className="flex flex-row gap-2">
              <input className="w-3" type="checkbox" value={"Men"} onChange={togglecategory} />
              Men
            </p>
            <p className="flex flex-row gap-2">
              <input className="w-3" type="checkbox" value={"Women"} onChange={togglecategory}/>
              Women
            </p>
            <p className="flex flex-row gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} onChange={togglecategory}/>
              Kids
            </p>
          </div>
        </div>
        {/**filter for sub-category */}
        <div
          className={`border border-gray-400 rounded-lg pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm font-medium mb-3 ">Type</p>
          <div className="flex flex-col text-sm font-light text-gray-700 gap-2">
            <p className="flex flex-row gap-2">
              <input className="w-3" type="checkbox" value={"Topwear"} onChange={toggleSubcategory}/>
              Topwear
            </p>
            <p className="flex flex-row gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} onChange={toggleSubcategory}/>
              Bottomwear
            </p>
            <p className="flex flex-row gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} onChange={toggleSubcategory}/>
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/**Right side components */}
      <div className="flex-1">

        {/**sort by */}
        <div className="flex justify-between text-base mt-2 sm:text-2xl mb-4">
          <Title titleword1={"BULK"} titleword2={"Collections"} />
          {/**sort-listing */}
          <select onChange={(e) => setSortBy(e.target.value)} className="border-2 border-gray-200 text-sm px-2">
            <option value="Relevant">Sort by: Relevant</option>
            <option value="Low to High">Sort by: Low to High</option>
            <option value="High to Low">Sort by: High to Low</option>
          </select>
        </div>

        {/**mappings */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6">
        {
          filterProducts.map((item, index) => (
            <ProductItems key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
        </div>
      </div>
    </div>
  );
}
