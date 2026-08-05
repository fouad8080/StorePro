import {useState,useEffect,useContext} from "react"
import {inform} from "../App"
import {Download,Plus} from 'lucide-react'
import Cards from "./supplierscarts"
import Toolbar from "./suppliersToolbar"
import ShowSuppliers from "./showsuppliers"


function Suppliers(){
    const {info}=useContext(inform)
    const [getinfo,setgetinfo]=useState([])
        
    useEffect(
        ()=>{
            try{
                console.log(info.suppliers)
                setgetinfo(info.suppliers)
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
    return(
        <div className="p-4">
            <div className="flex justify-between items-center mb-4 gap-2">
                <div className="">
                    <h1 className="font-semibold text-2xl">Suppliers</h1>
                    <p className="font-semibold text-gray-600">Manage and view all your suppliers</p>
                </div>
                <div className="flex space-x-2 gap-2">
                <button className="border-[#dbd7d7] border flex gap-2 items-center  px-4 py-2 rounded-md hover:bg-[#e3dfdf]"><Download className="w-4 h-4" /> import Suppliers</button>
                <button className="bg-[#16A34A]  text-white flex gap-2 items-center px-4 py-2 rounded-md hover:bg-[#15803d]"><Plus className="w-4 h-4" /> Add Supplier</button>
            </div>
            </div>
            <Cards />
            <Toolbar />
            <ShowSuppliers />
        </div>
    )
}

export default Suppliers

