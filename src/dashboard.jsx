import {useState ,useEffect ,BrowserRouter ,Routes,Route} from 'react' 
import Cards from './charts/cards.jsx' 
import Charts from './charts/charts.jsx'

function Dashboard(){

     const elements = [
        {name:"Dashboard",path:"/dashboard", icon:'./icon/icon/Home.svg'},
        {name:"Products",path:"/products", icon:'./icon/icon/Package-Box.svg'},
        {name:"Orders",path:"/orders", icon:'./icon/icon/Shopping-Cart.svg'},
        {name:"Customers",path:"/customers", icon:'./icon/icon/Users.svg'},
        {name:"Suppliers",path:"/suppliers", icon:'./icon/icon/Truck.svg'},
        {name:"Inventory",path:"/inventory", icon:'./icon/icon/Calendar.svg'},
        {name:"Analytics",path:"/analytics", icon:'./icon/icon/Bar-Chart.svg'},
        {name:"Reports",path:"/reports", icon:'./icon/icon/File-Text.svg'},
        {name:"Settings",path:"/settings", icon:'./icon/icon/Settings.svg'},
     ]
     const today=new Date().toISOString().split("T")[0]
    return(
        <div className="continer flex flex-row w-full  bg-[#062E24] ">
            <div className="UI w-full h-full bg-[#F8FAF8]  ">
               {/*info bar */}
               {/*  /info bar */}
               {/*dashboard */}
               <div className='flex flex-col items-end'>
                    <input className='w-45 mt-2 relative right-0 border rounded-lg p-1 mr-4 border-gray-700  ' defaultValue={today} type="date" />
                    <Cards />
                    <Charts />
               </div>
               {/* /dashboard */}
            </div>
        </div>
    )
}
export default Dashboard