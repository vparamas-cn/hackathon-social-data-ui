import React, { useEffect } from 'react';
import Chart from "react-apexcharts";

const ChartGraph = () => {
    var series = [{
        name: 'Positive',
        data: [360, 250, 221, 300, 180]
      }, {
        name: 'Netural',
        data: [60, 133, 120, 89, 90]
      }, {
        name: 'Negative',
        data: [40, 33, 43, 28, 32]
      }];


    var options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: true
            },
            zoom: {
              enabled: true
            }
        },
        colors:["#00e396","#cccccc","#ff0000"],
        plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          legend: {
            position: 'top',
            horizontalAlign: "left",
            offsetX: 70
        },
        xaxis: {
            categories: ["Women Empower", "Gender Equality", "Save the Planet", "Peace", "Poverty"]
        }
    };
    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width={500}
            height={450}
        />
    )
}
export default ChartGraph;