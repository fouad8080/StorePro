import { Search, ChevronDown, Filter, Download } from 'lucide-react'
import {inform} from '../App'
import { useContext ,useState,useEffect} from 'react'

function ProductsToolbar() {
    const {info,setproductfilter} = useContext(inform)
    const [getinfo,setgetinfo]=useState([])
    const [search,setsearch]=useState("")
    const [category,setcategory]=useState("")
    const [Status,setStatus]=useState("")
    const [brand,setbrand]=useState("")

    useEffect(
        ()=>{
            setproductfilter({search,category,Status,brand})
            
        }
        ,[search,category,Status,brand]
    )

    useEffect(
        ()=>{
            setgetinfo(info.products)
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
                    onChange={e=>setsearch(e.target.value)}
                />
            </div>

            {/* Category */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setcategory(e.target.value)}>
                    <option value="">All Categories</option>
                    {[...new Set(getinfo.map(pro=>pro.category))].map((category,index)=>(
                        <option value={category} key={index}>{category}</option>
                    ))}
                </select>
                
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setStatus(e.target.value)}>
                    <option value="">All Statuses</option>
                    {[...new Set(getinfo.map(pro=>pro.availabilityStatus))].map((category,index)=>(
                        <option value={category} key={index}>{category}</option>
                    ))}
                </select>
               
            </div>

            {/* Brand */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <select onChange={e=>setbrand(e.target.value)}>
                    <option value="">All Brands</option>
                    {getinfo.map((product,index)=>(
                        <option value={product.brand} key={index}>{product.brand}</option>
                    ))}
                </select>
                
            </div>
            
            {/* Export */}
            <div className="flex items-center gap-2 border border-gray-200 dark:border-[#1E2530] rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-[#12161F]">
                <Download className="w-4 h-4" />
                Export
            </div>
        </div>
    )
}

export default ProductsToolbar
