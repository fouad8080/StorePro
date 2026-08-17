import { useEffect, useContext } from "react"
import informition from './db.json'
import { inform } from "../App"

function Info() {
  const { setinfo, setcategory } = useContext(inform)

  useEffect(() => {
    async function Import_info() {
      try {
        const respond = await fetch("https//analatyc-proto.onrender.com/get_json")
        const productdata = await respond.json()

        setinfo(productdata)
        
        const categories = productdata.products.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1
          return acc
        }, {})

        setcategory(categories)
      } catch (error) {
        
        setinfo(informition)
        
        setcategory(
            informition.products.reduce((acc, product) => {
          acc[product.category] = (acc[product.category] || 0) + 1
          return acc
        }, {})
        
        )
      }
    }
    Import_info()
  }, [])

  return null
}

export default Info