import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
import {Eye,Pencil,Trash2,Star, StarCheck} from 'lucide-react'

function ShowInventory(){
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
                console.table(info.inventory)
                setstartindex((currentpage-1) * itemperpage)
                setgetinfo(info.inventory.slice(startindex,startindex + itemperpage))
                settotalpage(Math.ceil(info.inventory.length / itemperpage))
                

            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info,currentpage]
    )
    
    

    return(
        <div className=" bg-[#F8FAF8] border border- rounded-2xl border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]  flex flex-col items-end-safe mr-3">
            <div className="bg-[#edeeed] grid grid-cols-9 w-full text-center rounded-t-2xl p-3">
                <p className="min-w-0 card-title col-span-2">Product</p>
                <p className="card-title">SKU</p>
                <p className="card-title">Location</p>
                <p className="card-title">Last Restock</p>
                <p className="card-title">Stock</p>
                <p className="card-title">SupplierId</p>
                <p className="card-title">Status</p>
                <p className="card-title">Action</p>
            </div>
            <div className="  w-full rounded-t-2xl p-3 ">
                {getinfo.map((product,index)=>(
                    <div className="product border-b border-gray-400 grid grid-cols-9 items-center justify-center text-center" key={index}>
                        <p className="font-semibold min-w-0 col-span-2">{product.productTitle}</p>
                        <p >{product.sku}</p>
                        <p>{product.warehouse}</p>
                        <p>{product.lastRestocked}</p>
                        <p>{product.quantityInStock}</p>
                        <p>{product.supplierId} </p>
                        <p className={product.stockStatus==="In Stock" ? "text-[#16A34A] bg-[#DCFCE7] rounded-md" : "text-[#DC2626] bg-[#FEE2E2] rounded-md "}>{product.stockStatus}</p>
                        
                        <div className="action">
                            <button className="bg-[#F2F3F4] p-2 mr-1 rounded-sm cursor-pointer hover:bg-gray-500"><Eye className="w-4 h-4  " /></button>
                            <button className="bg-[#F2F3F4] p-2 mr-1 rounded-sm cursor-pointer hover:bg-gray-500"><Pencil className="w-4 h-4  " /></button>
                            <button className="bg-[#FFDAD6] p-2 mr-1 rounded-sm cursor-pointer hover:bg-[#f6a89f]"><Trash2 className="w-4 h-4  text-[#EF4444]  " /></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <button disabled={currentpage===totalpage} onClick={()=>{if(currentpage!==1)setcurrentpage(p=>p-1)}} >&lt;</button>
                {getpages(currentpage,totalpage).map((page, i)=> page=== "..." ? (
                    <span key={`dots-${i}`} className="px-5">...</span>
                ) : (
                    <button key={page} className={page===currentpage ? "bg-[#80e8a8bd] border ml-4 mr-4 border-green-400 h-9 w-9 m-2 cursor-pointer rounded-md" : " cursor-pointer ml-4 mr-4 rounded-md p-2 m-2"} onClick={()=>setcurrentpage(page)}>{page}</button>
                ))}
                <button disabled={currentpage===totalpage} onClick={()=>{if(currentpage!==totalpage)setcurrentpage(p=>p+1)}} >&gt;</button>
            </div>
        </div>
    )

}
export default ShowInventory