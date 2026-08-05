import { useState,useEffect,useContext } from "react";
import { inform } from "../App";

function TopSellingProducts() {
  const {info}=useContext(inform)
  const [product,setgetproduct]=useState([])
  const [showproduct,setshowproduct]=useState([])
  
  
  useEffect(
    ()=>{
      try{
        setgetproduct(info.products)
        console.log(info.products[0].images[0])
      }
      catch(error){
        
      }
    }
    ,[info]
  )
    
 
  useEffect(
    ()=>{
      try{
            const products = [
        {
          name: product[0].title,
          image: product[0].images[0],
          price: product[0].price,
          growth: "18.5%",
          units: `${product[0].stock} units` ,
        },
        {
          name: product[1].title,
          image: product[1].images[0],
          price: product[1].price,
          growth: "14.5%",
          units: `${product[1].stock} units` ,
        },
        
      ];
        setshowproduct(products)
      }
      catch(error){
        
      }

      
    }
    ,[product]
  )
  if(showproduct.length===0){
    return(
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="card-title">Top Selling Products</h3>
        <button className="text-sm text-gray-500 border rounded-lg px-3 py-1.5">
          View All
        </button>
      </div>
      <p className="text-sm text-gray-400 mt-4">loading...</p>
      </div>
    )
  }
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="card-title">Top Selling Products</h3>
        <button className="text-sm text-gray-500 border rounded-lg px-3 py-1.5">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {showproduct.map((product, index) => (
          <div key={index} className="flex items-center justify-between ">
            <div className="flex items-center gap-3 justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 rounded-lg object-cover bg-gray-100"
              />
              <span className="text-sm text-gray-700">{product.name}</span>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <span className="text-gray-700 w-20">{product.price}</span>
              <span className="text-green-600 w-16">↑ {product.growth}</span>
              <span className="text-gray-500 w-20 text-right">{product.units}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopSellingProducts;