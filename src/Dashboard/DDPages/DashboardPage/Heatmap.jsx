import React from 'react';
import ReactApexChart from 'react-apexcharts';


const heatMap = [
    {
        name: "3 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 23,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 40,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },

    {
        name: "6 am",
        data: [
            {
                x: "Mon",
                y: 30,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 13,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 73,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "9 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 53,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 42,
            },
        ],
    },
    {
        name: "12 am",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 30,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 0,
            },
        ],
    },
    {
        name: "3 pm",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 63,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 23,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "6 pm",
        data: [
            {
                x: "Mon",
                y: 23,
            },
            {
                x: "Tue",
                y: 43,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 83,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "9 pm",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 73,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
    {
        name: "12 pm",
        data: [
            {
                x: "Mon",
                y: 43,
            },
            {
                x: "Tue",
                y: 83,
            },
            {
                x: "Wed",
                y: 43,
            },
            {
                x: "Thu",
                y: 43,
            },
            {
                x: "Fri",
                y: 43,
            },
            {
                x: "Sat",
                y: 43,
            },
            {
                x: "Sun",
                y: 43,
            },
        ],
    },
];


const Heatmap = () => {
    const cellSize = 6;
    const cellGap = 10;
    const chartData = {
        options: {
            chart: {
                height: 400,
                type: "heatmap",
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            plotOptions: {
                heatmap: {
                    radius: 12,
                },
            },
            colors: ["#3E949A"],
            xaxis: {
                labels: {
                    show: true,
                },
            },
            yaxis: {
                labels: {
                    show: true,
                },
            },
            grid: {
                padding: {
                    right: cellSize / 2,
                },
                show: true,
                borderColor: "#ffffff",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 1,
                },
                column: {
                    colors: undefined,
                    opacity: 1,
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 10,
                },
            },
        },
        series: heatMap.map(item => {
            return {
                name: item.name,
                data: item.data.map(entry => {
                    return {
                        x: entry.x,
                        y: entry.y,
                    };
                }),
            };
        }),
    };

    return (
        <div className="heatmap-container">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="heatmap"
                height={cellSize * 24 + cellGap * 23}
                width={370}
            />
        </div>
    );
};

export default Heatmap;
