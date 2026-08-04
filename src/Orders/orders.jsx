import { useState , useEffect , useContext } from "react";
import Cards from "./ordercards"; 
import Orderstoolbar from "./ordertoolbar";
import ShowOrders from "./showOrders";
import { inform } from "../App";


function Orders(){console.log("dasdsadsadasda")
    const {info}=useContext(inform)
    const [getinfo,setgetinfo]=useState([])
    
    useEffect(
        ()=>{
            try{
                setgetinfo(info.products)
            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info]
    )

    if(!getinfo || getinfo?.length===0){
        return(
            <div className=" w-full bg-[#F8FAF8]  ">
            <h2>Loading...</h2>

            </div>
        )
    }
    return(
        <div className="p-5">
            <h1 className="font-semibold text-2xl">Orders</h1>
            <p className="font-semibold text-gray-600" >Manage andtrack customer orders</p>
            <Cards />
            <Orderstoolbar />
            <ShowOrders />
        </div>
    )
    
}
export default Orders