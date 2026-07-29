import {useState ,useEffect ,BrowserRouter ,Routes,Route} from 'react' 
import Cards from './cards.jsx' 
import Charts from './charts.jsx'

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

    return(
        <div className="continer flex flex-row w-full h-dvh bg-[#062E24] ">
            <div className="flex sidebar flex-col  p-3.5 w-1/4 h-dvh bg-[#062E24]">
                <img src='./public/stockpro.png' alt='logo' className="mb-5   mx-auto my-4 " />
               <div className="flex flex-col  w-full h-3/5 bg-[#062E24] space-y-4">
                {elements.map((element,index)=>{
                return(
                    
                    <div key={index} className="flex flex-row hover:bg-[#075e48] w-full items-center pl-3 rounded-4xl justify-start h-10 bg-[#062E24]">
                        <img  src={element.icon} alt={element.name} className="w-5 h-5 mr-2" />
                        <a href={element.path} className="text-white">{element.name}</a>
                    </div>
                )
               })}
               </div>
               
            </div>
            <div className="UI w-full h-full bg-[#e5eeec] rounded-tl-3xl ">
               {/*info bar */}
               <div className="info flex flex-row justify-between items-center p-3.5 w- h-16  border-b-1 border-b-gray-400  rounded-t-3xl">
                    <div className="search_bar flex bg-gray-300 items-center w-2/5 rounded-2xl pl-3">
                        <img src="./icon/icon/Search.svg" alt="search" className="w-5 h-5 mr-2" />
                        <input type="text" placeholder="Search products, orders, categories..." className="w-full h-10 focus:outline-none focus:ring-0 text-gray-700 rounded-md pl-2" />
                    </div>
                    <div className="profile flex ">
                        <img src="./icon/icon/Bell.svg" alt="notification" className="text-white w-5 h-5 mr-2" />
                        <img src="./icon/icon/Users.svg" alt="user" className="w-5 h-5 mr-2" />
                    </div>
               </div>
               {/*  /info bar */}
               {/*dashboard */}
               <div className='flex flex-col items-end'>
                    <input className='w-45 mt-2 relative right-0 border rounded-lg p-1 mr-4 border-gray-700  ' type="date" />
                    <Cards />
                    <Charts />
               </div>
               {/* /dashboard */}
            </div>
        </div>
    )
}
export default Dashboard