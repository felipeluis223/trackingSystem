import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar, } from 'react-chartjs-2';

import * as faker from 'faker';

ChartJS.register(
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
      text: 'Chart',
    },
    
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#ffff00f7",
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#0EA5E9",
      },
    ],
  };
  
function Dashboard(){
    return (
        <section className="w-full min-h-[400px] flex flex-wrap justify-evenly">
            <h1 className="w-full h-[80px] text-4xl text-[#ffff00f7] flex justify-center items-center font-bold">Dashboard</h1>
            
            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>

            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>

            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>

            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>
            
            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>

            <div className="w-[400px] max-h-[300px] m-[15px] bg-[#1f1f1f] p-[10px] rounded-md">
                <Bar options={options} data={data} />
            </div>
            
        </section>
    )
}

export default Dashboard;