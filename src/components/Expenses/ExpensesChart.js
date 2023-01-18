import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //'in' is used for object and 'of' for array
  for (const expense of props.expenses) {
    // strating at 0 => january => 0
    const expenseMonth = expense.date.getMonth();

    chartDataPoints[expenseMonth].value += expense.amount;
    // console.log(`${chartDataPoints[expenseMonth].value} ta druhá hodnota je ${expense.amount} a tamrtka součet je`);
    // console.log((chartDataPoints[expenseMonth].value += expense.amount));
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
