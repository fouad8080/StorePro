import { Search, ChevronDown, Filter, Download } from 'lucide-react'
import {inform} from '../App'
import { useContext ,useState,useEffect} from 'react'

function Orderstoolbar(){
    const {info,setordersfilter} = useContext(inform)
        const [getinfo,setgetinfo]=useState([])
        const [search,setsearch]=useState("")
        const [pyment,setpyment]=useState("")
        const [Status,Setstate]=useState("")
    
        useEffect(
            ()=>{
                setordersfilter({search,pyment,Status})
            }
            ,[search,pyment,Status]
        )
    
        useEffect(
            ()=>{
                setgetinfo(info.orders)
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
                    placeholder="Search by order ID,customer or product..."
                    className="bg-transparent outline-none text-sm w-full"
                    onChange={e=>setsearch(e.target.value)}
                />
            </div>
            
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setpyment(e.target.value)}>
                    <option value="">All Payments</option>
                    {[...new Set(getinfo.map(pro=>pro.paymentMethod))].map((pay,index)=>(
                        <option value={pay} key={index}>{pay}</option>
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
            <button className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-green-700 bg-[#56e6497a]">
                <Download className="w-4 h-4" />
                Export
            </button>

        </div>
    )
}
export default Orderstoolbar