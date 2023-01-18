import "./ChartBar.css";

const ChartBar = (props) => {
  //barFillHeight slouží jako proměná pro nastavení výsky sloupce v jednotlivých měsících
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          //style bere hodnoty v JSX jako objekt, proto 2x {}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
