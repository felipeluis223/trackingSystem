import React from 'react';
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
import { Bar, Line, Doughnut } from 'react-chartjs-2';

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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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

  export let oldData = {
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
  console.log(data)
  
function Dashboard(){
    return (
        <section className="w-full min-h-[400px] flex flex-wrap justify-evenly">
            <h1 className="w-full h-[80px] text-4xl text-[#ffff00f7] flex justify-center items-center font-bold">Companies - dashboard</h1>
            
            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>
            
            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Doughnut data={oldData} />;
            </div>
                    
            {/* <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Line options={options} data={data} if />
            </div> */}
        </section>
    )
}

export default Dashboard;