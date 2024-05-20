import React, { Fragment } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChartDistribution = ({ data }) => {

    const options = {
        cutout: '85%',
        plugins: {
            hover: {
                mode: null // Disable hover mode
            },
            tooltips: {
                enabled: false, // Disable tooltips
            },
            legend: {
                display: false // Hide legend
            },
            datalabels: {
                display: false,
                /* formatter: (value, ctx) => {
                    return value.value + " ETH";
                },
                color: 'black',
                anchor: 'center',
                align: 'center',
                font: {
                    size: 5 // Change the font size here
                } */

            }
        }
    };
    return (
        <Fragment>
            <div className="w-full relative">
                <Doughnut data={data} options={options} />
                <div className="absolute w-full h-full rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent z-[1]"></div>
            </div>
        </Fragment>
    )
}

export default PieChartDistribution