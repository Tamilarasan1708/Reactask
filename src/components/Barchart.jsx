import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({totalOrder,orderApprove}) => {
  const series = [
    {
      name: 'Total order received',
      data: totalOrder, 
    },
    {
      name: 'Order approval pending',
      data: orderApprove, 
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    colors: ['#007bff', '#ffa500'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    },
    
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} orders`,
      },
    },
    legend: {
      position: 'bottom',
    },
  };

  return (
    <div className='bg-white rounded-md p-4'>
      <h2 className='text-cyan-950 font-semibold'>Analytics</h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
