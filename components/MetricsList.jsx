import MetricsCard from "./MetricsCard";

export default function MetricsList({ currentData }) {
  const metricsCards = [
    {
      title: "Feels Like",
      value: currentData?.temperature_2m.toFixed(0) ?? "-",
      unit: "°",
    },
    {
      title: "Humidity",
      value: currentData?.relative_humidity_2m ?? "-",
      unit: "%",
    },
    {
      title: "Wind",
      value: currentData?.wind_speed_10m.toFixed(0) ?? "-",
      unit: "mph",
    },
    {
      title: "Precipitation",
      value: currentData?.precipitation ?? "-",
      unit: "in",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 my-5 desktop:grid-cols-4">
      {metricsCards.map((metricCard) => (
        <MetricsCard
          key={metricCard.title}
          title={metricCard.title}
          value={metricCard.value}
          unit={metricCard.unit}
        />
      ))}
    </div>
  );
}
