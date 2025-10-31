import { getWeatherIcon } from "../src/utils/getWeatherIcon";

export default function HourlyForecastCard({ icon, hour, temp }) {
  const formatTime = (hour) => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="flex items-center justify-between  bg-neutral-700 px-3 py-2 rounded-lg border border-neutral-600">
      <div className="flex items-center gap-2">
        <img src={getWeatherIcon(icon)} className="w-10"></img>
        <p className="text-xl">{formatTime(hour)}</p>
      </div>
      <p>{temp.toFixed(0)}°</p>
    </div>
  );
}
