import { Search,Home,Package,ShoppingCart,Users,Truck,Calendar,SettingsIcon } from "lucide-react";
import { useContext ,useState} from "react";
import { inform } from "./App";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const elements = [
        {name:"Dashboard",path:"/dashboard", icon:<Home className="w-5 h-5 mr-2" />},
        {name:"Products",path:"/products", icon:<Package className="w-5 h-5 mr-2" />},
        {name:"Orders",path:"/orders", icon:<ShoppingCart className="w-5 h-5 mr-2" />},
        {name:"Customers",path:"/customers", icon:<Users className="w-5 h-5 mr-2" />},
        {name:"Suppliers",path:"/suppliers", icon:<Truck className="w-5 h-5 mr-2" />},
        {name:"Inventory",path:"/inventory", icon:<Calendar className="w-5 h-5 mr-2" />},
        {name:"Settings",path:"/settings", icon:<SettingsIcon className="w-5 h-5 mr-2" />},
    ]

    const {sidebarOpen, setSidebarOpen} = useContext(inform);
    return (
        <div className={` sidebar sticky top-0 flex-col  p-3.5 w-1/4 h-dvh bg-[#062E24] dark:bg-[#0A0E14] dark:border-r dark:border-[#1E2530] ${sidebarOpen ? "flex absolute w-full":"hidden"}  md:flex md:relative md:w-1/4`}>
                <button  className="flex items-center justify-center w-8 h-8 rounded-full bg-[#075e48] dark:bg-[#12161F] absolute top-3 right-3 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
               <img src='./public/stockpro.png' alt='logo' className="mb-5 w-40  md:w-70  mx-auto my-4 " />
               <div className="flex flex-col  w-full h-3/5 bg-[#062E24] dark:bg-[#0A0E14] space-y-4">
                {elements.map((element,index)=>{
                return(<NavLink onClick={()=>setSidebarOpen(false)} key={index} to={element.path} className={({isActive})=> isActive ? 'text-white flex  w-full items-center pl-3 rounded-4xl justify-start h-10 bg-[#0e634d] dark:bg-[#111822]': 'text-white flex  hover:bg-[#075e48] dark:hover:bg-[#12161F] w-full items-center pl-3 rounded-4xl justify-start h-10 bg-[#062E24] dark:bg-[#0A0E14] '}>{element.icon} {element.name}</NavLink>)
               })}
               </div>
            </div>
    )
}
export default Sidebar;