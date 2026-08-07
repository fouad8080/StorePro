import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
import {Eye,Pencil,Trash2,Star, StarCheck , Settings} from 'lucide-react'

function ShowSuppliers(){
    const {info}=useContext(inform)
    const [getinfo,setgetinfo]=useState([])
    const [currentpage,setcurrentpage]=useState(1)
    const itemperpage=5;
    const [totalpage,settotalpage]=useState(0)
    const [startindex,setstartindex]=useState((currentpage-1) * itemperpage)

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
                
                setstartindex((currentpage-1) * itemperpage)
                setgetinfo(info.suppliers.slice(startindex,startindex + itemperpage))
                settotalpage(Math.ceil(info.orders.length / itemperpage))
                

            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info,currentpage]
    )
    
    

    return(
        <div className=" bg-[#F8FAF8] border border- rounded-2xl border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]  flex flex-col items-end-safe mr-3">
            <div className=" bg-[#edeeed] grid grid-cols-9 w-full text-center border-b border-gray-200 rounded-t-2xl p-3">
                <p className=" font-semibold">Supplier</p>
                <p className="min-w-0 card-title  font-semibold">Contact</p>
                <p className="card-title font-semibold col-span-2">Email</p>
                <p className="card-title font-semibold">Phone</p>
                <p className="card-title font-semibold">Location</p>
                <p className="card-title font-semibold">Products</p>
                <p className="card-title font-semibold">LastOrder</p>
                <p className="card-title font-semibold">Action</p>
            </div>
            <div className="  w-full rounded-t-2xl p-3 ">
                {getinfo.map((supplier,index)=>(
                    <div className="product border-b border-gray-200 grid grid-cols-9 items-center justify-center text-center" key={index}>
                        <p className="font-semibold text-md">{supplier.companyName}</p>
                        <p className="min-w-0 card-title " >{supplier.contactPerson}</p>
                        <p className="col-span-2">{supplier.email}</p>
                        
                        <p>{supplier.phone}</p>
                        <p className="">{supplier.address.country} </p>
                        <p className="">{supplier.productsSupplied}</p>
                        <p className={supplier.status==="Inactive" ? "bg-[#eaff0070] rounded-2xl" : " bg-[#DCFCE7] text-[#16A34A] rounded-2xl"}>{supplier.status}</p>
                        <div className="action">
                            <button className="bg-[#F2F3F4] p-2 mr-1 rounded-sm cursor-pointer hover:bg-gray-500"><Eye className="w-4 h-4  " /></button>
                            <button className="bg-[#F2F3F4] p-2  mr-1 rounded-sm cursor-pointer hover:bg-gray-500 text-center"><Settings className=" w-4 h-4" /></button>
                            <button className="bg-[#FFDAD6] p-2 mr-1 rounded-sm cursor-pointer hover:bg-[#f6a89f]"><Trash2 className="w-4 h-4  text-[#EF4444]  " /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mr-10">
                <button disabled={currentpage===1} onClick={()=>{if(currentpage!==1)
                    {setcurrentpage(p=>p-1)
                        console.log("sdsadsadas")
                    }}} >&lt;</button>
                {getpages(currentpage,totalpage).map((page, i)=> page=== "..." ? (
                    <span key={`dots-${i}`} className="px-5">...</span>
                ) : (
                    <button key={page} className={page===currentpage ? "bg-[#DCFCE7] text-[#16A34A] border ml-4 mr-4 border-green-400 h-9 w-9 m-2  cursor-pointer rounded-md" : " cursor-pointer hover:bg-green-300  ml-4 mr-4 h-9 w-9 m-2 rounded-md p-2 "} onClick={()=>setcurrentpage(page)}>{page}</button>
                ))}
                <button disabled={currentpage===totalpage} onClick={()=>{if(currentpage!==totalpage)setcurrentpage(p=>p+1)}} >&gt;</button>
            </div>
        </div>
    )

}
export default ShowSuppliers