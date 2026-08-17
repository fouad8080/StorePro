import { Search, Bell, User, Moon, Sun ,Option } from "lucide-react";
import { useContext ,useState ,useEffect} from "react";
import { inform } from "./App";
import { Link } from "react-router-dom";

function Searchbar(){
    const { darkMode, setdarkMode ,info ,sidebarOpen,setSidebarOpen} = useContext(inform);
    const [search,setsearch]=useState("")
    const [productsinfo,setproductsinfo]=useState([])
    const [ordersinfo,setordersinfo]=useState([])
    const [customersinfo,setcustomersinfo]=useState([])
    const [suppliersinfo,setsuppliersinfo]=useState([])
    const [user,setuser]=useState([])
    
    



    useEffect(
        ()=>{
            try{
                setuser(info.currentUser)
                console.log(info.currentUser)
            }
            catch(e){}
            
        }
        ,[info]
    )

   
    useEffect(() => {
    try {
        
        const productsfilters = info.products.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );
        setproductsinfo(productsfilters.slice(0, 2));

        
        const ordersfilters = info.orders.filter(o =>
            o.customerName?.toLowerCase().includes(search.toLowerCase()) ||
            String(o.id).includes(search)
        );
        setordersinfo(ordersfilters.slice(0, 2));

        
        const customersfilters = info.customers.filter(c =>
            c.customerName?.toLowerCase().includes(search.toLowerCase()) ||
            c.email?.toLowerCase().includes(search.toLowerCase())
        );
        setcustomersinfo(customersfilters.slice(0, 2));

        
        const suppliersfilters = info.suppliers.filter(s =>
            s.supplierName?.toLowerCase().includes(search.toLowerCase())
        );
        setsuppliersinfo(suppliersfilters.slice(0, 2));

    } catch (e) {}
}, [search, info]);
    

    return(
        <div className="info flex flex-row relative justify-between items-center p-3.5 w- h-16 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] border-b border-b-gray-400 dark:border-b-[#1E2530]  rounded-t-3xl">
                    <button className={`p-2 rounded-full ${sidebarOpen ? "bg-[#075e48] dark:bg-[#12161F]" : "bg-gray-300 dark:bg-[#12161F]"}" block md:hidden`} onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Option className="w-5 h-5 mr-2 invert-0 text-gray-800 dark:invert" />
                    </button>
                    <div className="flex flex-col  w-2/5 rounded-2xl">
                        <div className="search_bar flex relative top-0  bg-gray-300 dark:bg-[#12161F] dark:border dark:border-[#1E2530] items-center  rounded-2xl pl-3">
                            <Search className="w-5 h-5 mr-2 invert-0 text-gray-800 dark:invert" />
                            <div className="w-full flex flex-col">
                                <input 
                                type="text" placeholder="Search products, orders, categories..." className="w-full h-10 focus:outline-none focus:ring-0 text-gray-700 dark:text-gray-200 rounded-md pl-2"
                                onChange={(e)=>setsearch(e.target.value)} 
                                />
                            </div>
                        
                        </div>
                    {search.length === 0 ? null : (
                        productsinfo.length > 0 || ordersinfo.length > 0 || customersinfo.length > 0 || suppliersinfo.length > 0 ? (
                            <div className="absolute left-12 top-full w-2/6 border border-gray-300 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] rounded-2xl p-2 max-h-96 overflow-y-auto">

                            {productsinfo.length > 0 && (
                                <div>
                                <h3 className="font-semibold px-2 py-1">Products</h3>
                                    {productsinfo.map((product, index) => (
                                        <Link to={`/products/${product.id}`} key={index} className="border-b border-gray-300 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] flex items-center p-2 gap-2">
                                        <img src={product.images[0]} alt={product.title} className="w-8 h-8 object-cover rounded" />
                                        <p>{product.title}</p>
                                        </Link>
                                    ))}
                                <Link to={"/products"} className="font-semibold px-2 py-1">View All </Link>
                                </div>
                            )}

                            {ordersinfo.length > 0 && (
                                <div>
                                <h3 className="font-semibold px-2 py-1">Orders</h3>
                                {ordersinfo.map((order, index) => (
                                    <div key={index} className="border-b border-gray-300 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] flex items-center p-2 gap-2">
                                    <p>#{order.id} - {order.customerName}</p>
                                    </div>
                                ))}
                                </div>
                            )}

                            {customersinfo.length > 0 && (
                                <div>
                                <h3 className="font-semibold px-2 py-1">Customers</h3>
                                {customersinfo.map((customer, index) => (
                                    <div key={index} className="border-b border-gray-300 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] flex items-center p-2 gap-2">
                                    <p>{customer.name}</p>
                                    </div>
                                ))}
                                </div>
                            )}

                            {suppliersinfo.length > 0 && (
                                <div>
                                <h3 className="font-semibold px-2 py-1">Suppliers</h3>
                                {suppliersinfo.map((supplier, index) => (
                                    <div key={index} className="border-b border-gray-300 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] flex items-center p-2 gap-2">
                                    <p>{supplier.name}</p>
                                    </div>
                                ))}
                                </div>
                            )}

                            </div>
                        ) : (
                            <div className="absolute left-12 top-full w-2/6 border border-gray-300 bg-[#F8FAF8] dark:bg-[rgb(10,14,20)] rounded-2xl p-3">
                            <p className="text-gray-500">there is no result</p>
                            </div>
                        )
                        )}
                    </div>
                    
                    <div className="profile flex items-center ">
                        <button
                          onClick={()=>setdarkMode(d=>!d)}
                          aria-label="Toggle dark mode"
                          className="w-9 h-9 mr-2 rounded-full flex items-center justify-center bg-gray-200 dark:bg-[#12161F] dark:border dark:border-[#1E2530] hover:bg-gray-300 dark:hover:bg-[#1B212C] cursor-pointer transition-colors"
                        >
                          {darkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-700" />}
                        </button>
                        <Bell className="text-white w-5 h-5 mr-2 invert dark:invert-0" />
                        <div className="flex items-center gap-3">
                            <img src={user.avatar} className="w-8 h-8 rounded-full" />
                            <div className="flex flex-col">
                                <h2 className="font-semibold">{user.name}</h2>
                                <h3 className="font-semibold text-sm text-gray-500">{user.role}</h3>
                            </div>
                        </div>
                    </div>
              </div>
    )
}
export default Searchbar