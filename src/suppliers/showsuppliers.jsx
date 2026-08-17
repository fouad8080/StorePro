import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
import {Eye,Pencil,Trash2,Star, StarCheck , Settings} from 'lucide-react'

function ShowSuppliers(){
    const {info,suppliersfilter}=useContext(inform)
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
                const start=(currentpage-1) * itemperpage
                const filters=info.suppliers.filter((p)=>{
                    const matchsearch= p.companyName.toLowerCase().includes((suppliersfilter?.search || "").toLowerCase());
                    const matchcountries=suppliersfilter?.country ? p.address.country===suppliersfilter.country : true ;
                    const matchcity=suppliersfilter?.city ? p.address.city===suppliersfilter.city : true ;
                    const matchbrand=suppliersfilter?.brand ? p.brand===suppliersfilter.brand : true ;
                    const matchStatus=suppliersfilter?.Status ? p.status===suppliersfilter.Status : true ;
                    return  matchcountries && matchsearch && matchcity && matchbrand && matchStatus
                })
                setgetinfo(filters.slice(start,start + itemperpage))
                settotalpage(Math.ceil(filters.length / itemperpage))
                

            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info,currentpage,suppliersfilter]
    )
    
    

    return(
        <div className=" bg-[#F8FAF8] dark:bg-[#0A0E14] border border- rounded-2xl border-gray-300 dark:border-[#1E2530] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]  flex flex-col items-end-safe mr-3">
            <div className="  grid grid-cols-9 w-full text-center border-b border-gray-200 dark:border-[#1E2530] rounded-t-2xl p-3">
                <p className=" font-semibold">Supplier</p>
                <p className="min-w-0 card-title font-semibold">Contact</p>
                <p className="card-title font-semibold col-span-2">Email</p>
                <p className="card-title font-semibold">Phone</p>
                <p className="card-title font-semibold">Location</p>
                <p className="card-title font-semibold">Products</p>
                <p className="card-title font-semibold">LastOrder</p>
                <p className="card-title font-semibold">Action</p>
            </div>
            <div className="  w-full rounded-t-2xl text-center p-3 ">
                {getinfo.length===0 ? <h1 className="">there is no result</h1>:getinfo.map((supplier,index)=>(
                    <div className="product border-b border-gray-200 dark:border-[#1E2530] grid grid-cols-9 items-center justify-center text-center" key={index}>
                        <p className="font-semibold text-md">{supplier.companyName}</p>
                        <p className="min-w-0 card-title " >{supplier.contactPerson}</p>
                        <p className="col-span-2">{supplier.email}</p>
                        
                        <p>{supplier.phone}</p>
                        <p className="">{supplier.address.country},{supplier.address.city} </p>
                        <p className="">{supplier.productsSupplied}</p>
                        <p className={supplier.status==="Inactive" ? "bg-[#FFDAD6] text-[#EF4444] rounded-2xl" : " bg-[#DCFCE7] text-[#16A34A] rounded-2xl"}>{supplier.status}</p>
                        <div className="action">
                            <button className="bg-[#F2F3F4] dark:bg-[#1B212C] p-2 mr-1 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-[#232B38]"><Eye className="w-4 h-4  " /></button>
                            <button className="bg-[#F2F3F4] dark:bg-[#1B212C] p-2  mr-1 rounded-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-[#232B38] text-center"><Settings className=" w-4 h-4" /></button>
                            <button className="bg-[#FFDAD6] p-2 mr-1 rounded-sm cursor-pointer hover:bg-[#f6a89f]"><Trash2 className="w-4 h-4  text-[#EF4444]  " /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mr-10">
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
export default ShowSuppliers