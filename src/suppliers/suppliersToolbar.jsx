import { Search, ChevronDown, Filter, Download } from 'lucide-react'
import {inform} from '../App'
import { useContext ,useState,useEffect} from 'react'

function Toolbar() {
    const {info,setsuppliersfilter} = useContext(inform)
        const [getinfo,setgetinfo]=useState([])
        const [search,setsearch]=useState("")
        const [country,setcountry]=useState("")
        const [city,setcity]=useState("")
        const [brand,setbrand]=useState("")
        const [Status,setstate]=useState("")
    
        useEffect(
            ()=>{
                setsuppliersfilter({search,country,city,brand,Status})
            }
            ,[search,country,city,brand,Status]
        )
    
        useEffect(
            ()=>{
                setgetinfo(info.suppliers)
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
                    placeholder="Search suppliers..."
                    className="bg-transparent outline-none text-sm w-full"
                    onChange={e=>setsearch(e.target.value)}
                />
            </div>

            

           
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setcountry(e.target.value)}>
                    <option value="">All Countries</option>
                    {[...new Set(getinfo.map(pro=>pro.address.country))].map((pay,index)=>(
                        <option value={pay} key={index}>{pay}</option>
                    ))}
                </select>
            </div>
            
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setcity(e.target.value)}>
                    <option value="">All Cities</option>
                    {[...new Set(getinfo.map(pro=>pro.address.city))].map((pay,index)=>(
                        <option value={pay} key={index}>{pay}</option>
                    ))}
                </select>
            </div>
            
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setbrand(e.target.value)}>
                    <option value="">All Brands</option>
                    {[...new Set(getinfo.map(pro=>pro.brand))].map((brand,index)=>(
                        <option value={brand} key={index}>{brand}</option>
                    ))}
                </select>
                
            </div>
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setstate(e.target.value)}>
                    <option value="">All State</option>
                    {[...new Set(getinfo.map(pro=>pro.status))].map((status,index)=>(
                        <option value={status} key={index}>{status}</option>
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
