import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
import {Eye,Pencil,Trash2,Star, StarCheck} from 'lucide-react'

function Showcustomers(){
    const {info,customersfilter}=useContext(inform)
    const [getinfo,setgetinfo]=useState([])
    const [currentpage,setcurrentpage]=useState(1)
    const itemperpage=5;
    const [totalpage,settotalpage]=useState(0)
    

    function getpages(currentpage,totalpages){
        const pages=[]
        for(let i=1;i<=totalpages;i++){
            const isfirst= i===1;
            const islast=i===totalpages;
            const isnear=Math.abs(i - currentpage)<=1
            if(isfirst||islast||isnear){
                pages.push(i)
            } else if (pages[pages.length - 1] !=="..."){
                pages.push("...")
            }
        }
        return pages
    }

    useEffect(
        ()=>{
            try{
                    const filters=info.customers.filter((p)=>{
                    const matchsearch= p.name.toLowerCase().includes((customersfilter?.search || "").toLowerCase());
                    const matchStatus=customersfilter?.Status ? p.status===customersfilter.Status : true ;
                    const matchLocation=customersfilter?.location ? p.address.city===customersfilter.location : true ;

                    return  matchsearch && matchStatus && matchLocation
                })
                const startindex=(currentpage-1) * itemperpage
                setgetinfo(filters.slice(startindex,startindex + itemperpage))
                settotalpage(Math.ceil(filters.length / itemperpage))
                

            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info,currentpage,customersfilter]
    )
    
    

    return(
        <div className="min-w-0 bg-[#F8FAF8] dark:bg-[#0A0E14] border border- rounded-2xl border-gray-300 dark:border-[#1E2530] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]  flex flex-col items-end-safe mr-3">
            <div className="w-full min-w-0 overflow-auto">
                <div className="min-w-[1200px]">
                    <div className=" dark:bg-[#151A24] grid grid-cols-9 w-full text-center rounded-t-2xl p-3">
                        <p className="min-w-0 card-title col-span-2">Customers</p>
                        <p className="card-title">Contect</p>
                        <p className="card-title">Location</p>
                        <p className="card-title">Orders</p>
                        <p className="card-title">Total Spend</p>
                        <p className="card-title">Status</p>
                        <p className="card-title">Joined On</p>
                        <p className="card-title">Action</p>
                    </div>
                    <div className="  w-full rounded-t-2xl text-center p-3 ">
                        {getinfo.length===0 ? <h1 className="">there is no result</h1>:
                        getinfo.map((customer,index)=>(
                            <div className="product border-b border-gray-400 dark:border-[#1E2530] grid grid-cols-9 items-center justify-center text-center" key={index}>
                                <div className="min-w-0 caret-title col-span-2 flex items-center ">
                                    <img className="w-10 h-10 object-cover rounded-md" src={customer.avatar} />
                                    <div className="text-left ml-2">
                                        <p className="font-semibold  text-md">{customer.name}</p>
                                        <p className="font-semibold text-gray-600 dark:text-gray-400  text-xs">{customer.email}</p>
                                    </div>
                                </div>
                                <p >{customer.phone}</p>
                                <p>{customer.address.country}-{customer.address.city}</p>
                                <p>{customer.totalOrders}</p>
                                <p>{customer.totalSpent}</p>
                                <p className={customer.status==="VIP" ? " bg-[#fbe224] dark:text-black font-semibold rounded-2xl" : "text-[#16A34A] bg-[#DCFCE7] font-semibold rounded-2xl "}>{customer.status}</p>
                                <p className="flex items-center justify-center">{customer.joinedDate}</p>
                                
                                <div className="action">
                                    <button className="bg-[#F2F3F4] dark:bg-[#1B212C] p-2 mr-1 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-[#232B38]"><Eye className="w-4 h-4  " /></button>
                                    <button className="bg-[#F2F3F4] dark:bg-[#1B212C] p-2 mr-1 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-[#232B38]"><Pencil className="w-4 h-4  " /></button>
                                    <button className="bg-[#FFDAD6] p-2 mr-1 rounded-sm cursor-pointer hover:bg-[#f6a89f]"><Trash2 className="w-4 h-4  text-[#EF4444]  " /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                {getinfo.length===0 ? "":<button disabled={currentpage===totalpage} onClick={()=>{if(currentpage!==1)setcurrentpage(p=>p-1)}} >&lt;</button>}
                {getpages(currentpage,totalpage).map((page, i)=> page=== "..." ? (
                    <span key={`dots-${i}`} className="px-5">...</span>
                ) : (
                    <button key={page} className={page===currentpage ? "bg-[#80e8a8bd] border ml-4 mr-4 border-green-400 h-9 w-9 m-2 cursor-pointer rounded-md" : " cursor-pointer ml-4 mr-4 rounded-md p-2 m-2"} onClick={()=>setcurrentpage(page)}>{page}</button>
                ))}
                {getinfo.length===0 ? "":<button disabled={currentpage===totalpage} onClick={()=>{if(currentpage!==totalpage)setcurrentpage(p=>p+1)}} >&gt;</button>}
            </div>
        </div>
    )

}
export default Showcustomers