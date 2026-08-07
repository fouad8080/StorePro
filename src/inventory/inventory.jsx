import { Download,Plus } from "lucide-react";
import { useState, useEffect, useContext } from 'react'
import { inform } from '../App'
import Cards from './inventorycards'
import Toolbar from './inventoryToolbar'
import ShowInventory from './showInventory'

function Inventory() {
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
            <div className=" w-full bg-[#F8FAF8]  ">
            <h2>Loading...</h2>

            </div>
        )
    }
    return (
    <div className="p-4">
            <div className="flex justify-between items-center mb-4 gap-2">
                <div className="">
                    <h1 className="font-semibold text-2xl">Inventory</h1>
                    <p className="font-semibold text-gray-600">Manage and view all your inventory</p>
                </div>
                <div className="flex space-x-2 gap-2">
                <button className="border-[#dbd7d7] border flex gap-2 items-center  px-4 py-2 rounded-md hover:bg-[#e3dfdf]"><Download className="w-4 h-4" /> import Inventory</button>
                <button className="bg-[#16A34A]  text-white flex gap-2 items-center px-4 py-2 rounded-md hover:bg-[#15803d]"><Plus className="w-4 h-4" /> Add Item</button>
            </div>
            </div>
            <Cards />
            <Toolbar />
            <ShowInventory />
        </div>)

}
export default Inventory;