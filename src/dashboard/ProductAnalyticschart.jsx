import Chart from "react-apexcharts";
import { useState ,useEffect, useContext } from "react";
import { inform } from "../App"



function ProductAnalytics() {
  const {info,darkMode}=useContext(inform)
  const [getinfo,setgetinfo]=useState([])
  const [state, setState] = useState({})
  const [data,setdata]=useState([])
  const [day,setday]=useState([])
  const [domain,setdomain]=useState("7days")

  useEffect(
      ()=>{
         try{
          
          if(domain==="7days"){
            
            setgetinfo(info.productAnalytics)
              
              const items= info.productAnalytics.map(prev=>
                prev.sold
              )
              const days=info.productAnalytics.map(prev=>
                prev.day
              )
              setdata(items)
              
              setday(days)
          }
          else if( domain==="6month"){
            
            setgetinfo(info.productAnalyticsSixMonths)
              
              const items= info.productAnalyticsSixMonths.map(prev=>
                prev.sold
              )
              const days=info.productAnalyticsSixMonths.map(prev=>
                prev.month
              )
              setdata(items)
              
              setday(days)
          }
          else if( domain==="month"){
            
            setgetinfo(info.productAnalyticsMonth)
              
              const items= info.productAnalyticsMonth.map(prev=>
                prev.sold
              )
              const days=info.productAnalyticsMonth.map(prev=>
                prev.week
              )
              setdata(items)
              setday(days)
          }
              
              
          }
          catch(error){
          console.log(error)
      }
      }      
      ,[info,domain]
  )
  
  useEffect(
    ()=>{
      try{
    const charinfo={
        series: [
          {
            name: "Orders",
            data: data,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 280,
            toolbar: { show: false },
            background: "transparent",
          },
          theme: { mode: darkMode ? "dark" : "light" },
          xaxis: {
            categories: day,
          },
          colors: ["#16a34a"],
          plotOptions: {
            bar: {
              borderRadius: 8,
              columnWidth: "45%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          grid: {
            borderColor: darkMode ? "#1E2530" : "#f1f1f1",
            strokeDashArray: 4,
          },
        },
      };
  setState(charinfo)
    }
    catch(error){
      console.log(error);
      
    }
    }
    ,[data,getinfo,darkMode]
  )
  
  if(!getinfo || getinfo.length === 0){
    return (
    <div className="bg-white dark:bg-[#12161F] h-60 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#1E2530]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Product Analytics</h3>
        <select onChange={(e)=>{setdomain(e.target.value)}} value={domain}  className="border rounded-lg px-3 py-1 text-sm dark:bg-[#12161F] dark:border-[#1E2530] dark:text-gray-200">
            <option value="7days">Last 7 days</option>
            <option value="month">Last month</option>
            <option value="6month">Last 6 month</option>
          </select>
      </div>
      <h2 className="card-value">
          Loading...
        </h2>
      
    </div>
  );
  }


  return (
    <div className="bg-white dark:bg-[#12161F] h-60 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-[#1E2530]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-100">Product Analytics</h3>
        <select onChange={(e)=>{setdomain(e.target.value)}} value={domain}  className="border rounded-lg px-3 py-1 text-sm dark:bg-[#12161F] dark:border-[#1E2530] dark:text-gray-200">
            <option value="7days">Last 7 days</option>
            <option value="month">Last month</option>
            <option value="6month">Last 6 month</option>
          </select>
      </div>

      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        height={150}
      />
    </div>
  );
}

export default ProductAnalytics;