import React, { useEffect } from 'react';
import Chart from "react-apexcharts";

const ChartGraph = () => {
    var series = [
        {
            name: "Comments",
            data: [60863, 46744, 14782, 45937]
        }
    ];


    var options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [2018, 2019, 2020, 2021]
        },
      
        
    };
    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width={450}
            height={390}
        />
    )
}
export default ChartGraph;