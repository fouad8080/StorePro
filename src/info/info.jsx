import { useEffect , useState ,useContext} from "react"
import { inform } from "../App"
import informition from "../info/INFO.json"

function Info(){
    const {info,setinfo,setcategory}=useContext(inform)
    
    useEffect(()=>{
        setinfo(informition)
        /*async function Import_info(){
            try{
                const respond= await fetch("https://dummyjson.com/products?limit=100")
                const productdata=await respond.json()*/
                
                const categories=informition.products.reduce((acc,product)=>{
                    acc[product.category]=(acc[product.category] || 0)+1
                    return acc
                },{})
                setcategory(categories)
                console.log(categories)
                
            },[])
               /* 
            }
            catch(error){
                console.log(error)
            }
        }
        Import_info()
    }
        ,[]
    )*/
    

    
    
}
export default Info