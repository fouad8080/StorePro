import Chart from "react-apexcharts";
import { useEffect, useState, useContext } from "react";
import { inform } from "../App";

function CategoryDistribution() {
  const { categories,setcategory } = useContext(inform);
  const [catnum, setcatnum] = useState([]);

  

  useEffect(() => {
    if (categories && Object.keys(categories).length > 0) {
      const chartinfo = Object.entries(categories).map(([name, value]) => ({
        name,
        value,
      }));
      setcatnum(chartinfo);
    }
  }, [categories]);

  const [state, setState] = useState({
    series: [],
    options: {
      chart: { type: "donut" },
      labels: [],
      colors: ["#166534", "#22c55e", "#4ade80", "#f97316", "#d1d5db"],
      legend: { show: false },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                fontSize: "14px",
                color: "#6b7280",
                formatter: () => "2,456",
              },
              value: {
                show: true,
                fontSize: "24px",
                fontWeight: 700,
                color: "#1f2937",
              },
            },
          },
        },
      },
      stroke: { width: 0 },
    },
  });

  useEffect(() => {
    if (catnum.length === 0) return;

    const sorted = [...catnum].sort((a, b) => b.value - a.value);
    const topcategories = sorted.slice(0, 4);
    const restcategories = sorted.slice(4);
    const other = restcategories.reduce((sum, cat) => sum + cat.value, 0);
    const finallist =
      other > 0
        ? [...topcategories, { name: "Others", value: other }]
        : topcategories;

    setState((prev) => ({
      ...prev,
      series: finallist.map((cat) => cat.value),
      options: {
        ...prev.options,
        labels: finallist.map((cat) => cat.name),
      },
    }));
  }, [catnum]);

  if (state.series.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800">Category Distribution</h3>
        <p className="text-sm text-gray-400 mt-4">loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
      <h3 className="font-semibold text-gray-800">Category Distribution</h3>

      <div className="flex items-center gap-6">
        <Chart
          options={state.options}
          series={state.series}
          type="donut"
          width={153}
          height={153}
        />

        <ul className="space-y-3 flex-1">
          {state.options.labels.map((label, index) => {
            const value = state.series[index];
            const total = state.series.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(0);
            return (
              <li key={label} className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        state.options.colors[index % state.options.colors.length],
                    }}
                  ></span>
                  <span className="text-gray-700">{label}</span>
                </div>
                <span className="text-gray-500">
                  {percentage}% ({value})
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryDistribution;