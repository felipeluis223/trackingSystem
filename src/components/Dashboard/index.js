import React, { useRef } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

import * as faker from 'faker';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


// generate random data
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Companies 2023',
    },
    
  },
};
let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Company 1',
        borderColor: "#ffff00f7",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: "#ffff00f7",
        borderWidth: 1
      },
      {
        label: 'Company 2',
        borderColor: "#0EA5E9",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: "#0EA5E9",
        borderWidth: 1
      },

      {
        label: 'Company 3',
        borderColor: "#ffffff",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: "#ffffff",
        borderWidth: 1
      },
    ],
  };

export let dataAll = {
    labels: [data.datasets[0].label, data.datasets[1].label, data.datasets[2].label],
    datasets: [
        {
        label: 'Companies',
        data: [
            data.datasets[0].data.reduce(function(total, numero){
                return total + numero;
            }, 0),
            data.datasets[1].data.reduce(function(total, numero){
                return total + numero;
            }, 0),
            data.datasets[2].data.reduce(function(total, numero){
                return total + numero;
            }, 0),
        ],
        backgroundColor: [
            data.datasets[0].backgroundColor,
            data.datasets[1].backgroundColor,
            data.datasets[2].backgroundColor,
        ],
        borderColor: [
            data.datasets[0].borderColor,
            data.datasets[1].borderColor,
            data.datasets[2].borderColor,
        ],
        borderWidth: 1,
        },
    ],
};

// Days - Month:
const days = () => {
    let array = [];
    for(let i=1; i<=30; i++){
        array.push(`Day-${i}`);
    }
    return array;
}

labels = days();

export const monthData = {
    labels,
    datasets: [
      {
        label: 'Company 1',
        borderColor: "#ffff00f7",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: "#ffff00f7",
        borderWidth: 1
      },
      {
        label: 'Company 2',
        borderColor: "#0EA5E9",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: "#0EA5E9",
        borderWidth: 1
      },

      {
        label: 'Company 3',
        borderColor: "#ffffff",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
        backgroundColor: "#ffffff",
        borderWidth: 1
      },
    ],
  };

export let monthDataAll = {
    labels: [monthData.datasets[0].label, monthData.datasets[1].label, monthData.datasets[2].label],
    datasets: [
        {
        label: 'Companies',
        data: [
            monthData.datasets[0].data.reduce(function(total, numero){
                return total + numero;
            }, 0),
            monthData.datasets[1].data.reduce(function(total, numero){
                return total + numero;
            }, 0),
            monthData.datasets[2].data.reduce(function(total, numero){
                return total + numero;
            }, 0),
        ],
        backgroundColor: [
            monthData.datasets[0].backgroundColor,
            monthData.datasets[1].backgroundColor,
            monthData.datasets[2].backgroundColor,
        ],
        borderColor: [
            monthData.datasets[0].borderColor,
            monthData.datasets[1].borderColor,
            monthData.datasets[2].borderColor,
        ],
        borderWidth: 1,
        },
    ],
};


function Dashboard(){
    
    return (
        <div className="w-full">
            <h1 className="w-full mt-[15px] text-center text-4xl text-[#ffff00f7] font-bold">Companies - dashboard</h1>
            <section className="w-full flex flex-col-reverse">
                <section className="w-full min-h-[400px] flex flex-wrap justify-evenly">
                    <span className="w-full h-[80px] text-center text-md text-[#C0C0C0] flex justify-center items-center font-bold"><i>Analysis of the annual period</i></span>    
                    <div className="w-[700px] sm:w-[600px] sm:max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md flex justify-center items-center">
                        <Bar options={options} data={data} />
                    </div>
                    <div className="w-[200px] sm:w-[400px] sm:max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md flex justify-center items-center">
                        <Doughnut data={dataAll} />;
                    </div>

                </section>

                <section className="w-full min-h-[400px] flex flex-wrap justify-evenly">
                    <span className="w-full h-[80px] text-center text-md text-[#C0C0C0] flex justify-center items-center font-bold"><i>Analysis of the monthly period</i></span>
                    
                    <div className="w-[200px] sm:w-[300px] sm:max-h-[400px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md flex justify-center items-center">
                        <Doughnut data={monthDataAll} />;
                    </div>
                    <div className="w-[700px] sm:w-[60%] sm:h-[400px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md flex justify-center items-center">
                        <Bar options={options} data={monthData} />
                    </div>

                </section>
            </section>
        </div>        
    )
}

export default Dashboard;