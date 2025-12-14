import MetricsCard from "./MetricsCard";
import { useUnits } from "../src/hooks/useUnits";
import {
  convertTemperature,
  convertWind,
  convertPrecipitation,
} from "../src/utils/convertUnits";

export default function MetricsList({ currentData }) {
  const { units } = useUnits();

  const metricsCards = [
    {
      title: "Feels Like",
      value:
        currentData?.temperature_2m !== undefined
          ? convertTemperature(currentData.temperature_2m, units.temperature)
          : "-",
      unit: "°",
    },
    {
      title: "Humidity",
      value: currentData?.relative_humidity_2m ?? "-",
      unit: "%",
    },
    {
      title: "Wind",
      value:
        currentData?.wind_speed_10m !== undefined
          ? convertWind(currentData.wind_speed_10m, units.wind)
          : "-",
      unit: units.wind,
    },
    {
      title: "Precipitation",
      value:
        currentData?.precipitation !== undefined
          ? convertPrecipitation(currentData.precipitation, units.precipitation)
          : "-",
      unit: units.precipitation,
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
