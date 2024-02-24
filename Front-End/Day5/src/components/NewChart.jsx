import { Bar } from 'react-chartjs-2';

const WorldWineProductionChart = () => {
  // Data for the chart
  const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  const yValues = [55, 49, 44, 24, 15];
  const barColors = ["red", "green", "blue", "orange", "brown"];

  // Chart data object
  const chartData = {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  };

  // Chart options
  const chartOptions = {
    legend: { display: false },
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  };

  return (
    <div>
      <h2>World Wine Production 2018</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default WorldWineProductionChart;
