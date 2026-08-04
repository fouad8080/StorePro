import Chart from "react-apexcharts";
import { useState,useEffect,useContext } from "react";
import { inform } from "../App";
  

function Areacharts() {
  const {info}=useContext(inform)
  const [getinfo,setgetinfo]=useState([])
  const [state, setState] = useState({})
  const [data,setdata]=useState([])
  const [day,setday]=useState([])
  const [domain,setdomain]=useState("7days")

  
  useEffect(
      ()=>{
         try{
          console.log(info)
          if(domain==="7days"){
            console.log(domain)
            setgetinfo(info.salesOverview)
              console.table(info.salesOverview)
              const items= info.salesOverview.map(prev=>
                prev.total
              )
              const days=info.salesOverview.map(prev=>
                prev.date
              )
              setdata(items)
              console.log(days)
              setday(days)
          }
          
          else if( domain==="month"){
            console.log(domain)
            setgetinfo(info.salesOverviewMonth)
              
              const items= info.salesOverviewMonth.map(prev=>
                prev.total
              )
              const days=info.salesOverviewMonth.map(prev=>
                prev.week
              )
              setdata(items)
              console.log(days)
              setday(days)
          }
          else if( domain==="6month"){
            console.log(domain)
            setgetinfo(info.salesOverviewSixMonths)
              console.table(info.salesOverviewSixMonths)
              const items= info.salesOverviewSixMonths.map(prev=>
                prev.total
              )
              const days=info.salesOverviewSixMonths.map(prev=>
                prev.month
              )
              setdata(items)
              console.log(days)
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
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        colors:["#16a34a"],
        
        
        labels: day,  
      
        legend: {
          horizontalAlign: "left",
        },
      },
    }
    setState(charinfo)
        }
        catch(error){
          console.log(error)
        }
        
  }
      ,[getinfo, data,domain]
    )
    

    if(!getinfo || getinfo.length === 0){
      return (
    
    <div className="card h-60 ">
      <div> 
        <div className="flex justify-between">
          <p className="card-title ">Sales Overview</p>
          <select  className="border rounded-lg px-3 py-1 text-sm">
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
          <select onChange={(e)=>{setdomain(e.target.value)}} value={domain}  className="border rounded-lg px-3 py-1 text-sm">
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