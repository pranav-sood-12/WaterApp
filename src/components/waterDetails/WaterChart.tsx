import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  pH: number;
  backgroundColors: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ pH, backgroundColors }) => {
  const data = {
    labels: ['pH Level'],
    datasets: [
      {
        label: `pH level ${pH}`,
        data: [pH, 14 - pH], // To visualize pH level in a doughnut chart
        borderColor: ['rgb(255,99,132)'],
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
