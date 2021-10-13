import React, { useEffect } from 'react';
import Chart from "react-apexcharts";

const ChartGraph = () => {
    var series = [

        {
            name: 'Posemo',
            type: 'column',
            data: [4.45, 6.02, 7.59, 8.78]
        },
        {
            name: "Negemo",
            type: 'column',
            data: [1.56, 2.03, 2.46, 2.89]
        },
        {
            name: "Affiliation",
            type: 'column',
            data: [1.45, 1.73, 2.08, 1.76]
        },
        {
            name: 'Achieve',
            type: 'column',
            data: [0.64, 0.83, 0.98, 1.06]
        },
        {
            name: "Power",
            type: 'column',
            data: [1.04, 1.27, 1.69, 1.71]
        },
        {
            name: "Reward",
            type: 'column',
            data: [0.73, 1.04, 1.32, 1.21]
        },
        {
            name: "Risk",
            type: 'column',
            data: [0.13, 0.26, 0.35, 0.29]
        },
        // {
        //     name: "Average",
        //     type: 'line',
        //     data: [2.33, 4.26, 2.35, 5.29]
        // },

    ];

   
    var options = {
        chart: {
            height: 350,
            type: "bar",
        },
        dataLabels: {
            enabled: false
        },
        colors:["#00e396","#ff0000","#feb019","#4cb5f5","#484848","#ac3e31","#a5d8dd","#7e909a"],
        stroke: {
            width: 2
        },
        plotOptions: {
            bar: {
                columnWidth: "90%"
            }
        },
        xaxis: {
            categories: [2018,2019,2020,2021]
        },
        yaxis: {
            title: {
                text:"Sentiment and Motive Score"
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: "left",
            offsetX: 0
        }
    };
    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width={450}
            height={450}
        />
    )
}
export default ChartGraph;