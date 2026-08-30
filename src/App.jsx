import { createContext ,useState, useEffect} from "react";
import {BrowserRouter, Routes , Route, NavLink} from "react-router-dom";
import {Search, Sun, Moon ,Bell ,User ,Home ,Package,ShoppingCart,Users,Truck,Calendar,SettingsIcon} from "lucide-react";
import Dashboard from "./dashboard";
import Products from "./Products/product";
import Info from "./info/info";
import Orders from './Orders/orders';
import Customers from "./Customers/customers";
import Suppliers from "./suppliers/suppliers";
import Inventory from "./inventory/inventory";
import DisplayProduct from "./Products/displayproduct";
import Settings from "./settings/settings";
import Searchbar from "./searchbar";
import Sidebar from "./sidebar";
import  Layout  from "./loging/layout";

import Signin from "./loging/signin"
import PageNotFound from "./pagenotfound";

export const inform=createContext(null)


function App() {
  const [info,setinfo]=useState(null)
  const [categories,setcategory]=useState({})
  const [prductsfilter,setproductfilter]=useState({})
  const [oredersfilter,setordersfilter]=useState({})
  const [customersfilter,setcustomersfilter]=useState({})
  const [suppliersfilter,setsuppliersfilter]=useState({})
  const [inventoryfilter,setinventoryfilter]=useState({})
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
        {name:"Dashboard",path:"/dashboard", icon:<Home className="w-5 h-5 mr-2" />},
        {name:"Products",path:"/products", icon:<Package className="w-5 h-5 mr-2" />},
        {name:"Orders",path:"/orders", icon:<ShoppingCart className="w-5 h-5 mr-2" />},
        {name:"Customers",path:"/customers", icon:<Users className="w-5 h-5 mr-2" />},
        {name:"Suppliers",path:"/suppliers", icon:<Truck className="w-5 h-5 mr-2" />},
        {name:"Inventory",path:"/inventory", icon:<Calendar className="w-5 h-5 mr-2" />},
        {name:"Settings",path:"/settings", icon:<SettingsIcon className="w-5 h-5 mr-2" />},
     ]

  return (
    <BrowserRouter>
      <inform.Provider value={{info,setinfo,categories,setcategory,darkMode,setdarkMode,prductsfilter,setproductfilter,oredersfilter,setordersfilter,customersfilter,setcustomersfilter,suppliersfilter,setsuppliersfilter,inventoryfilter,setinventoryfilter,sidebarOpen,setSidebarOpen}}>
        <div className="flex w-full min-w-0 overflow-hidden bg-[#084637] dark:bg-[#0A0E14]  ">
          <Info info={{info,setinfo,setcategory}} />
          
            <div className={`UI w-full bg-[#F8FAF8] dark:bg-[#0A0E14] dark:text-gray-100 rounded-tl-3xl min-w-0 min-h-dvh md:flex md:flex-row  `}>
              
              <Routes>
                <Route path="/" element={<Signin />}/>
                <Route path="/loging/signin" element={<Signin />}/>
                <Route element={<Layout value={{sidebarOpen,setSidebarOpen}} />}>
                  
                  <Route path="/dashboard" element={<Dashboard className="" value={{info,setcategory,categories}} />} />
                  <Route path="/products" element={<Products className="" value={{info,setcategory,categories,prductsfilter,setproductfilter}} />} />
                  <Route path="/orders" element={<Orders className="" value={{info,setcategory,oredersfilter,setordersfilter}} />} />
                  <Route path="/customers" element={<Customers className="" value={{info,setcategory,customersfilter,setcustomersfilter}} />} />
                  <Route path="/suppliers" element={<Suppliers className="" value={{info,setcategory,suppliersfilter,setsuppliersfilter}} />} />
                  <Route path="/inventory" element={<Inventory className="" value={{info,setcategory,inventoryfilter,setinventoryfilter}} />} />
                  <Route path="/settings" element={<Settings className="" value={{info,setcategory}} />} />
                  <Route path="/products/:id" element={<DisplayProduct className="" value={{info,setcategory}} />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </div>
          </div>
      </inform.Provider>
    </BrowserRouter>
    
  );
}

export default App;