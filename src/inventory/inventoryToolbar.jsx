import { Search, ChevronDown, Filter, Download } from 'lucide-react'
import {inform} from '../App'
import { useContext ,useState,useEffect} from 'react'

function Toolbar(){
     const {info,setinventoryfilter} = useContext(inform)
        const [getinfo,setgetinfo]=useState([])
        const [search,setsearch]=useState("")
        const [Status,setStatus]=useState("")
        const [Location,setLocation]=useState("")

    
        useEffect(
            ()=>{
                setinventoryfilter({search,Status,Location})
                
            }
            ,[search,Status,Location]
        )
    
        useEffect(
            ()=>{
                setgetinfo(info.inventory)
            }
            ,[info]
        )
    return (
        <div className="flex pr-1.5 items-center gap-2 flex-wrap py-4">

            {/* Search */}
            <div className="flex  items-center gap-2 dark:bg-[#12161F] bg-gray-50 border dark:border-[#1E2530] border-gray-200 rounded-lg px-3 py-2 flex-1 ">
                <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent outline-none text-sm w-full"
                    onChange={e=>setsearch(e.target.value)}
                />
            </div>

            

            {/* Brand */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setStatus(e.target.value)}>
                    <option value="">Stock State</option>
                    {[...new Set(getinfo.map(pro=>pro.stockStatus))].map((status,index)=>(
                        <option value={status} key={index}>{status}</option>
                    ))}
                </select>
                
            </div>

            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setLocation(e.target.value)}>
                    <option value="">Location</option>
                    {[...new Set(getinfo.map(pro=>pro.warehouse))].map((warehouse,index)=>(
                        <option value={warehouse} key={index}>{warehouse}</option>
                    ))}
                </select>
                
            </div>

            {/* Export */}
            <button className="flex items-center gap-2 border dark:border-[#1E2530] border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 bg-white">
                <Download className="w-4 h-4" />
                Export
            </button>

        </div>
    )
}
export default Toolbar