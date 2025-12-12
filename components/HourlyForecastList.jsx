import { DropdownIcon } from "./icons/DropdownIcon";
import HourlyForecastCard from "./HourlyForecastCard";

export default function HourlyForecastList({ hourlyData }) {
  if (!hourlyData) return;
  return (
    <div className="bg-neutral-800 mt-8 px-4 py-5  rounded-2xl ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium tracking-wide">Hourly forecast</h2>
        <button className="bg-neutral-600 text-md  px-4 py-1.5 rounded-lg flex items-center gap-3">
          Tuesday
          <DropdownIcon className="w-3 h-3 transition-transform duration-150 " />
        </button>
      </div>
      <div
        className="flex flex-col gap-4 max-h-145  overflow-y-auto "
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#6B7280 transparent",
          paddingRight: "8px",
          marginRight: "-16px",
        }}
      >
        {hourlyData.time.map((hour, i) => (
          <HourlyForecastCard
            key={hour}
            icon={hourlyData.weather_code[i]}
            hour={hourlyData.time[i]}
            temp={hourlyData.temperature_2m[i]}
          />
        ))}
      </div>
    </div>
  );
}
