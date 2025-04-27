import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ data }) {
  // Default/fallback data structure
  const defaultData = {
    labels: [],
    datasets: [
      {
        label: 'No data',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  // Validate and merge with default data
  const chartData = {
    labels: data?.labels || defaultData.labels,
    datasets: data?.datasets?.length 
      ? data.datasets 
      : defaultData.datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: data?.title || 'Chart Title',
      },
    },
  };

  return <Line options={options} data={chartData} />;
}