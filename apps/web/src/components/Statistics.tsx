import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Statistics: React.FC = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Registrations',
        data: [12, 19, 3, 5, 2, 3, 14, 18, 6, 10, 11, 15],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Events', 'Registrations', 'Transactions'],
    datasets: [
      {
        data: [300, 150, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Registrations',
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow col-span-1 lg:col-span-2 xl:col-span-3">
      <h2 className="text-xl font-bold mb-4">Event Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 w-full">
          <h3 className="text-lg font-semibold mb-2">Monthly Statistics</h3>
          <div className="relative h-full">
            <Bar data={barData} options={options} />
          </div>
        </div>
        <div className="h-48 w-full">
          <h3 className="text-lg font-semibold mb-2">Overall Statistics</h3>
          <div className="relative h-full">
            <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
