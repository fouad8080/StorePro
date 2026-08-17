import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
import Cards from "./productscards";
import ProductsToolbar from "./ProductsToolbar";
import ShowProducts from "./showproduct";

function Products(){
    const {info}=useContext(inform)
    const [getinfo,setgetinfo]=useState([])
    
    useEffect(
        ()=>{
            try{
                setgetinfo(info.products)
            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info]
    )
    if(!getinfo || getinfo?.length===0){
        return(
            <div className=" w-full bg-[#F8FAF8] dark:bg-[#0A0E14]  ">
            <h2>Loading...</h2>

            </div>
        )
    }
    return(
        <div className=" w-full pl-4  bg-[#F8FAF8] dark:bg-[#0A0E14]  ">
            <div className="flex justify-between items-center">
                <div className="">
                    <h1 className="card-value text-2xl pl-3">Products</h1>
                <h2 className="card-description pl-3 pt-2">Manage your product inventory and details</h2>
                </div>
                <button className="bg-green-950 dark:bg-[#16A34A] text-white p-3 rounded-2xl mr-2 cursor-pointer dark:hover:bg-[#15803d]">+ Add Product</button>
            </div>
            <Cards />
            <ProductsToolbar />
            <ShowProducts />
        </div>
    )


}

export default Products

