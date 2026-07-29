import Areacharts from "./charts/areacharts";
import ProductAnalytics from "./charts/ProductAnalyticschart"
import ApexChart from "./charts/categorycharts";
import TopSellingProducts from "./charts/topseling"

function Charts(){
    return(<div className=" mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 pl-5 pr-5 w-full ">
        <Areacharts />
        <ProductAnalytics />
        <ApexChart />
        <TopSellingProducts />
        </div>
        
    )
}
export default Charts