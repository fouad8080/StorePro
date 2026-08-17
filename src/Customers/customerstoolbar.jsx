import { Search, ChevronDown, Filter, Download,Calendar } from 'lucide-react'
import { useState,useEffect,useContext } from "react";
import { inform } from "../App";

function Toolbar(){
    const {info,setcustomersfilter} = useContext(inform)
            const [getinfo,setgetinfo]=useState([])
            const [search,setsearch]=useState("")
            const [location,setlocation]=useState("")
            const [Status,Setstate]=useState("")
        
            useEffect(
                ()=>{
                    setcustomersfilter({search,location,Status})
                }
                ,[search,location,Status]
            )
        
            useEffect(
                ()=>{
                    setgetinfo(info.customers)
                }
                ,[info]
            )


    return (
        
        <div className="flex pr-1.5 items-center gap-2 flex-wrap py-4">

            {/* Search */}
            <div className="flex  items-center gap-2 bg-gray-50 dark:bg-[#12161F] border border-gray-200 dark:border-[#1E2530] rounded-lg px-3 py-2 flex-1 ">
                <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent outline-none text-sm w-full"
                    onChange={(e)=>setsearch(e.target.value)}
                />
            </div>

            

            {/* Status */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setlocation(e.target.value)}>
                    <option value="">All locations</option>
                    {[...new Set(getinfo.map(pro=>pro.address.city))].map((city,index)=>(
                        <option value={city} key={index}>{city}</option>
                    ))}
                </select>
               
            </div>

            

            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>Setstate(e.target.value)}>
                    <option value="">All Statuses</option>
                    {[...new Set(getinfo.map(pro=>pro.status))].map((state,index)=>(
                        <option value={state} key={index}>{state}</option>
                    ))}
                </select>
               
            </div>

            {/* Export */}
            <button className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <Download className="w-4 h-4" />
                Export
            </button>

        </div>
    )
}
export default Toolbar