import { createContext ,useState ,useEffect} from "react";
import {BrowserRouter, Routes , Route, Link} from "react-router-dom";
import { Sun, Moon ,User ,Bell } from "lucide-react";

import Dashboard from "./dashboard";
import Products from "./Products/product";
import Info from "./info/info";
import Orders from './Orders/orders';
import Customers from "./Customers/customers";
import Suppliers from "./suppliers/suppliers";
import Inventory from "./inventory/inventory";
export const inform=createContext(null)


function App() {
  const [info,setinfo]=useState(null)
  const [categories,setcategory]=useState({})
  const [darkMode,setdarkMode]=useState(()=>{
    const saved = localStorage.getItem("stockpro-theme")
    if(saved) return saved === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(()=>{
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("stockpro-theme", darkMode ? "dark" : "light")
  },[darkMode])
  const elements = [
        {name:"Dashboard",path:"/dashboard", icon:'./icon/icon/Home.svg'},
        {name:"Products",path:"/products", icon:'./icon/icon/Package-Box.svg'},
        {name:"Orders",path:"/orders", icon:'./icon/icon/Shopping-Cart.svg'},
        {name:"Customers",path:"/customers", icon:'./icon/icon/Users.svg'},
        {name:"Suppliers",path:"/suppliers", icon:'./icon/icon/Truck.svg'},
        {name:"Inventory",path:"/inventory", icon:'./icon/icon/Calendar.svg'},
        {name:"Settings",path:"/settings", icon:'./icon/icon/Settings.svg'},
     ]

  return (
    <BrowserRouter>
      <inform.Provider value={{info,setinfo,categories,setcategory}}>
        <div className="flex w-full bg-[#062E24] rounded-tl-2xl ">
          <Info info={{info,setinfo,setcategory}} />
          <div className="flex sidebar sticky top-0 flex-col  p-3.5 w-1/4 h-dvh bg-[#062E24]">
                <img src='./public/stockpro.png' alt='logo' className="mb-5   mx-auto my-4 " />
               <div className="flex flex-col  w-full h-3/5 bg-[#062E24] space-y-4">
                    {elements.map((element,index)=>{
                      return(
                          <div key={index} className="flex flex-row hover:bg-[#075e48] w-full items-center pl-3 rounded-4xl justify-start h-10 bg-[#062E24]">
                              <img  src={element.icon} alt={element.name} className="w-5 h-5 mr-2" />
                              <Link to={element.path} className="text-white">{element.name}</Link>
                          </div>
                      )
                    })}
               </div>
            </div>
            <div className="UI w-full flex-col bg-[#F8FAF8] rounded-tl-3xl ">
              <div className="info flex flex-row justify-between items-center p-3.5 w- h-16 bg-[#F8FAF8] border-b-1 border-b-gray-400  rounded-t-3xl">
                    <div className="search_bar flex bg-gray-300 items-center w-2/5 rounded-2xl pl-3">
                        <img src="./icon/icon/Search.svg" alt="search" className="w-5 h-5 mr-2" />
                        <input type="text" placeholder="Search products, orders, categories..." className="w-full h-10 focus:outline-none focus:ring-0 text-gray-700 rounded-md pl-2" />
                    </div>
                    <div className="profile flex items-center justify-end">
                      <button
                          onClick={()=>setdarkMode(d=>!d)}
                          aria-label="Toggle dark mode"
                          className="w-9 h-9 mr-2 rounded-full flex items-center justify-center bg-gray-200 dark:bg-[#12161F] dark:border dark:border-[#1E2530] hover:bg-gray-300 dark:hover:bg-[#1B212C] cursor-pointer transition-colors"
                        >
                          {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
                        </button>
                        <Bell className=" w-5 h-5 mr-2" />
                        <User className="w-5 h-5 mr-2" />
                    </div>
              </div>
              <Routes>
                <Route path="/" element={<Dashboard className="" value={{info,setcategory,categories}} />} />
                <Route path="/dashboard" element={<Dashboard className="" value={{info,setcategory,categories}} />} />
                <Route path="/products" element={<Products className="" value={{info,setcategory,categories}} />} />
                <Route path="/orders" element={<Orders className="" value={{info,setcategory,categories}} />} />
                <Route path="/customers" element={<Customers className="" value={{info,setcategory,categories}} />} />
                <Route path="/suppliers" element={<Suppliers className="" value={{info,setcategory,categories}} />} />
                <Route path="/inventory" element={<Inventory className="" value={{info,setcategory,categories}} />} />
                <Route path="/settings" element={<Dashboard className="" value={{info,setcategory,categories}} />} />
              </Routes>
            </div>
          </div>
      </inform.Provider>
    </BrowserRouter>
    
  );
}

export default App;