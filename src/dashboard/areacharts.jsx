import Chart from "react-apexcharts";
import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
  

function Areacharts() {
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
            
            setgetinfo(info.salesOverview)
              
              const items= info.salesOverview.map(prev=>
                prev.total
              )
              const days=info.salesOverview.map(prev=>
                prev.date
              )
              setdata(items)
              
              setday(days)
          }
          
          else if( domain==="month"){
            
            setgetinfo(info.salesOverviewMonth)
              
              const items= info.salesOverviewMonth.map(prev=>
                prev.total
              )
              const days=info.salesOverviewMonth.map(prev=>
                prev.week
              )
              setdata(items)
              
              setday(days)
          }
          else if( domain==="6month"){
            
            setgetinfo(info.salesOverviewSixMonths)
              
              const items= info.salesOverviewSixMonths.map(prev=>
                prev.total
              )
              const days=info.salesOverviewSixMonths.map(prev=>
                prev.month
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
        const charinfo={series: [
      {
        name: "Sales",             
        data: data,  
      },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: { enabled: false },
          background: "transparent",
        },
        theme: { mode: darkMode ? "dark" : "light" },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        colors:["#16a34a"],
        
        
        labels: day,  
      
        legend: {
          horizontalAlign: "left",
        },
        grid: { borderColor: darkMode ? "#1E2530" : "#e5e7eb" },
      },
    }
    setState(charinfo)
        }
        catch(error){
          console.log(error)
        }
        
  }
      ,[getinfo, data,domain,darkMode]
    )
    

    if(!getinfo || getinfo.length === 0){
      return (
    
    <div className="card h-60 ">
      <div> 
        <div className="flex justify-between">
          <p className="card-title ">Sales Overview</p>
          <select  className="border rounded-lg px-3 py-1 text-sm dark:bg-[#12161F] dark:border-[#1E2530] dark:text-gray-200">
            <option>Last 7 days</option>
          </select>
        </div>
        
        <h2 className="card-value">
          Loading...
        </h2>
      </div>
      
      </div>
      
  );
    }

  return (
    
    <div className="card h-60 ">
      <div> 
        <div className="flex justify-between">
          <p className="card-title ">Sales Overview</p>
          <select onChange={(e)=>{setdomain(e.target.value)}} value={domain}  className="border rounded-lg px-3 py-1 text-sm dark:bg-[#12161F] dark:border-[#1E2530] dark:text-gray-200">
            <option value="7days">Last 7 days</option>
            <option value="month">Last month</option>
            <option value="6month">Last 6 month</option>
          </select>
          </div>
        
        <h2 className="card-value">
          $24,780.50
        </h2>
      </div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height={150}
      />
      </div>
      
  );
}

export default Areacharts;