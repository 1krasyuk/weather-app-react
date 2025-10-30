import { getWeatherIcon } from "../src/utils/getWeatherIcon";
import DailyForecastCard from "./DailyForecastCard";

export default function DailyForecastList({ dailyData }) {
  if (!dailyData) return null;

  return (
    <div className="grid grid-cols-3 gap-4 my-5">
      {dailyData.time.map((day, i) => (
        <DailyForecastCard
          key={day}
          day={new Date(day).toLocaleDateString("en-US", { weekday: "short" })}
          maxTemp={dailyData.temperature_2m_max[i].toFixed(0)}
          minTemp={dailyData.temperature_2m_min[i].toFixed(0)}
          icon={getWeatherIcon(dailyData.weather_code[i])}
        />
      ))}
    </div>
  );
}
