import Chart from "react-apexcharts";
import { useState } from "react";

function ProductAnalytics() {
  const [state, setState] = useState({
    series: [
      {
        name: "Orders",
        data: [550, 620, 950, 700, 900, 620, 480],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 280,
        toolbar: { show: false },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        borderColor: "#f1f1f1",
        strokeDashArray: 4,
      },
    },
  });

  return (
    <div className="bg-white h-60 rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800">Product Analytics</h3>
        <select className="border rounded-lg px-3 py-1 text-sm">
          <option>This Week</option>
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