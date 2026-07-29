import Chart from "react-apexcharts";
import { useState } from "react";

function Areacharts() {
  const [state, setState] = useState({
    series: [
      {
        name: "Sales",             
        data: [3800, 4600, 5000, 5400, 4800, 5300, 6200],  
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
      
      
      labels: [
        "May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30",
      ],  
     
      legend: {
        horizontalAlign: "left",
      },
    },
  });

  return (
    
    <div className="card h-60 ">
      <div> 
        <div className="flex justify-between">
          <p className="card-title ">Sales Overview</p>
          <select className="border rounded-lg px-3 py-1 text-sm">
          <option>Last 7 days</option>
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