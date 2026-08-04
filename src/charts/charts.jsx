import Areacharts from "./areacharts";
import ProductAnalytics from "./ProductAnalyticschart"
import ApexChart from "./categorycharts";
import TopSellingProducts from "./topseling"

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