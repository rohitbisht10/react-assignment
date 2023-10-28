import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const ChartComponent = ({ selectedType }) => {
  const [chartOption, setChartOption] = useState(null);

  useEffect(() => {
    const generateChartData = () => {
      let barChartOption = null;
      let pieChartOption = null;

      const value = `${selectedType} Value`;
      barChartOption = {
        xAxis: {
          type: "category",
          data: [value],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [100, 120, 150],
            type: "bar",
            barWidth: 30,
          },
        ],
      };

      pieChartOption = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Options",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [{ value: 120, name: value }],
          },
        ],
      };

      return { barChart: barChartOption, pieChart: pieChartOption };
    };

    const options = generateChartData();
    setChartOption(options);
  }, [selectedType]);
  
  return (
    <div className="col-lg-6">
      <div className="d-flex justify-content-between">
        {chartOption && (
          <>
            <div style={{ height: "500px", width: "100%" }}>
              <h3 className="text-center">Bar Chart</h3>
              {chartOption.barChart && (
                <ReactECharts option={chartOption.barChart} />
              )}
            </div>
            <div style={{ height: "500px", width: "100%" }}>
              <h3 className="text-center">Pie Chart</h3>
              {chartOption.pieChart && (
                <ReactECharts option={chartOption.pieChart} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChartComponent;
