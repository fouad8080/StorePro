import Cards from "./customerscard"
import Toolbar from "./customerstoolbar"
import Showcustomers from "./showcustomers"
import { useState ,useEffect ,useContext } from "react"
import {Download,Plus} from 'lucide-react'
import { inform } from "../App"


function Customers(){
    const {info}=useContext(inform)
    const [getinfo,setgetinfo]=useState([])
        
    useEffect(
        ()=>{
            try{
                console.log(info.customers)
                setgetinfo(info.customers)
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
    <div className="p-4 min-w-0">
        <div className="flex justify-between items-center mb-4">
            <div className="">
                <h1 className="font-semibold text-2xl">Customers</h1>
                <p className="font-semibold text-gray-600 dark:text-gray-400 dark:text-gray-500">Manage and view all your customers</p>
            </div>
            <div className="flex space-x-2 gap-2">
                <button className="border-[#dbd7d7] border flex gap-2 items-center  px-4 py-2 rounded-md hover:bg-[#e3dfdf] dark:border-[#232B38] dark:hover:bg-[#1B212C] dark:text-gray-200"><Download className="w-4 h-4" /> import Customers</button>
                <button className="bg-[#16A34A]  text-white flex gap-2 items-center px-4 py-2 rounded-md hover:bg-[#15803d]"><Plus className="w-4 h-4" /> Add Customer</button>
            </div>
        </div>
        
        <Cards />
        <Toolbar />
        <Showcustomers />
    </div>   
    )

}
export default Customers