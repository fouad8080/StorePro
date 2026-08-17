import {useState, useEffect , useContext} from "react";
import { useParams ,Link } from "react-router-dom";
import { inform } from "../App";
import { ArrowLeft ,Star ,Box } from "lucide-react";

function DisplayProduct(){
    const {id}=useParams();
    const {info}=useContext(inform);
    const [text,settext]=useState("");
    const [getinfo,setgetinfo]=useState([]);
    const [expended,setexpended]=useState(false);
    const words=text.split(" ");
    const limit = 5;
    const short= words.length > limit;
    const [Image,setimage]=useState(0)

    
    useEffect(
        ()=>{
            try{
                setgetinfo(info.products[id-1])
                settext(info.products[id-1].description)
                console.log(info.products[id-1])
            }
            catch(error){
                console.log(error)
            }
            
        }
        ,[info]
    )
    if(!getinfo || getinfo?.length===0){
        return(
            <div className=" w-full bg-[#F8FAF8] dark:bg-[#0A0E14]  ">
            <h2>Loading...</h2>

            </div>
        )
    }

    return(
        <div>
            <div>
                <Link to="/products"><button className="cursor-pointer p-4 pt-2 pb-2 card-title flex gap-2 justify-center items-center"><ArrowLeft /> Back to Products</button></Link>
            </div>
            <div className="grid p-6 pt-1 pb-2 gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="border rounded-2xl p-2 flex flex-col  justify-around items-center border-gray-300 shadow-2xs ">
                    <img src={getinfo.images[Image]} alt={getinfo.title} className="w-70 h-70 bg-gray-200 rounded-lg "></img>
                    <div className="flex gap-2 mt-2">
                        {getinfo.images.map((image,index)=>{
                            return(
                                <button key={index} onClick={()=>setimage(index)}><img  src={image} alt={getinfo.title}  className={Image===index ? "w-10 h-10 bg-gray-200 rounded-lg border-2 border-green-500" : "w-10 h-10 bg-gray-200 rounded-lg"} ></img></button>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-3 pl-3">
                    <p className={getinfo.availabilityStatus==="In Stock" ? "bg-[#DCFCE7] text-[#16A34A] rounded-md w-20 text-center" : "bg-[#FFDAD6] w-20 text-center rounded-md text-[#EF4444]"}>{getinfo.availabilityStatus}</p>
                    <h1 className="text-3xl card-title">{getinfo.title}</h1>
                    <p>{getinfo.sku}</p>
                    <p className="bg-[#e4d3fa] text-[#6116a3] rounded-md w-20 text-center">{getinfo.category}</p>
                    <p className="text-sm font-semibold text-gray-700">
                        {expended || !short ? text: words.slice(0,limit).join(" ") + "..."}
                        {short && (<button className="text-gray-500" onClick={()=>setexpended(!expended)}>{expended ? "less" : "more"}</button>)}
                    </p>
                    <div className=" flex justify-around items-center mb-2">
                        <h1 className="text-2xl font-semibold">${getinfo.price}</h1>
                        <p className="flex gap-3 font-semibold"><Star className="text-yellow-400 " /> {getinfo.rating}</p>
                        <p className="text-sm text-gray-500">({getinfo.reviews.length} reviews)</p>
                    </div>
                    <div className="border-t border-gray-200 flex justify-around">
                        <div className=" flex flex-col gap-1 mt-2">
                            <p className="font-semibold text-gray-800">Brand</p>
                            <p className="font-semibold text-gray-800">Category</p>
                            <p className="font-semibold text-gray-800">Tags</p>
                            <p className="font-semibold text-gray-800">Warranty</p>
                        </div>
                        <div className=" flex flex-col gap-1 mt-2">
                            <p className="font-semibold text-gray-800">{getinfo.brand}</p>
                            <p className="font-semibold text-gray-800">{getinfo.category}</p>
                            <div className="font-semibold text-gray-800 flex gap-1">{getinfo.tags.map((tag,ind)=>(
                                <p className=" rounded-2xl bg-[#eceaea] p-2 pt-0 pb-0" key={ind}>{tag}</p>
                            ))}</div>
                            <p className="font-semibold  text-gray-800">{getinfo.warrantyInformation}</p>
                        </div>
                    </div>
                </div>
                <div className="border rounded-2xl border-gray-300 shodow-2xl p-6 flex-col justify-around  ">
                    <div className="flex justify-between items-center border-b border-gray-400 pb-2">
                        <div className="">
                            <p className="font-semibold text-gray-600">Stock Quantity</p>
                        <p className="font-semibold text-3xl text-green-600">{getinfo.stock}</p>
                        <p className="font-semibold text-gray-600">Unit in Stock</p>
                        </div>
                        <Box className="bg-green-200 text-green-500 w-15 h-15 p-3 rounded-2xl  "/>
                    </div>
                    <div className="border-t border-gray-200 flex justify-between">
                        <div className=" flex flex-col gap-4 mt-2">
                            <p className="font-semibold text-gray-800">Brand</p>
                            <p className="font-semibold text-gray-800">Category</p>
                            <p className="font-semibold text-gray-800">Discount</p>
                            <p className="font-semibold text-gray-800">Return Policy</p>
                        </div>
                        <div className=" flex flex-col gap-4 mt-2 ">
                            <p className="font-semibold text-gray-800 text-end">{getinfo.brand}</p>
                            <p className="font-semibold text-gray-800 text-end">{getinfo.category}</p>
                            <p className="font-semibold text-gray-800 text-end">%{getinfo.discountPercentage}</p>
                            <p className="font-semibold text-gray-800 text-end">{getinfo.returnPolicy}</p>
                        </div>
                       
                    </div> 
                    <div className="border-t border-gray-400 mt-4 flex justify-between ">
                            <div className=" flex flex-col gap-4 mt-2">
                            <p className="font-semibold text-gray-800">Added On</p>
                            <p className="font-semibold text-gray-800">Last Updated</p>
                            
                        </div>
                        <div className=" flex flex-col gap-4 mt-2 ">
                            <p className="font-semibold text-gray-800 text-end">{getinfo.brand}</p>
                            <p className="font-semibold text-gray-800 text-end">{getinfo.meta.updatedAt}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className=" border border-gray-300 rounded-2xl p-4 pt-2 m-6 mt-2 shadow">
                <h1 className="font-semibold mb-3">Product Information</h1>
                <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-2 font-semibold text-sm text-gray-700">
                        <span>
                            <p>Barcode</p>
                            <p>{getinfo.meta.barcode}</p>
                        </span>
                        <span>
                            <p>Minimum Order Quantity</p>
                            <p>{getinfo.minimumOrderQuantity}</p>
                        </span>
                        <span>
                            <p>Weight</p>
                            <p>{getinfo.weight}</p>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 font-semibold text-sm text-gray-700">
                        <span>
                            <p>Dimension</p>
                            <p>{getinfo.dimensions.depth}x{getinfo.dimensions.height}x{getinfo.dimensions.width}</p>
                        </span>
                        <span>
                            <p>Avilability</p>
                            <p className={getinfo.availabilityStatus==="In Stock" ? " text-[#16A34A] rounded-md" : " rounded-md text-[#EF4444]"}>{getinfo.availabilityStatus}</p>
                        </span>
                        <span>
                            <p>Shipping</p>
                            <p>{getinfo.shippingInformation}</p>
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 font-semibold text-sm text-gray-700">
                        <span>
                            <p>Images</p>
                            <p>{getinfo.images.length}</p>
                        </span>
                        <span>
                            <p>Reviews</p>
                            <p>{getinfo.reviews.length}</p>
                        </span>
                        <span>
                            <p>Return Policy</p>
                            <p>{getinfo.returnPolicy}</p>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DisplayProduct