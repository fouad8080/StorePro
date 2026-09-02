import { Outlet } from "react-router-dom";
import { inform } from "../App";
import Sidebar from "../sidebar"
import Searchbar from "../searchbar"
import { useContext } from "react";


function Layout(){
    const {sidebarOpen,setSidebarOpen}=useContext(inform)


    return(
        <div className=" flex w-full ">
            <Sidebar />
            <div className={`flex flex-col w-full min-w-0 overflow-hidden 
                 bg-[#F8FAF8] dark:bg-[#0A0E14] dark:text-gray-100 ${sidebarOpen ? "hidden": null} 
                  md:rounded-tl-3xl min-h-dvh md:flex   `}>
                <Searchbar  value={{sidebarOpen,setSidebarOpen}}/>
                <Outlet />
            </div>
            
        </div>
    )
}
export default Layout