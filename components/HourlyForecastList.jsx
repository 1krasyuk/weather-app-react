import { DropdownIcon } from "./icons/DropdownIcon";
import HourlyForecastCard from "./HourlyForecastCard";
import { useState, useEffect } from "react";

export default function HourlyForecastList({ hourlyData }) {
  function groupHourlyByDay(hourly) {
    if (!hourly || !hourly.time) return {};

    const grouped = {};

    hourly.time.forEach((ts, i) => {
      const day = ts.split("T")[0]; // "2025-11-01"
      if (!grouped[day]) grouped[day] = [];

      grouped[day].push({
        time: ts,
        temp: hourly.temperature_2m?.[i],
        icon: hourly.weather_code?.[i],
      });
    });

    return grouped;
  }

  const grouped = groupHourlyByDay(hourlyData);
  const days = Object.keys(grouped);

  const [selectedDay, setSelectedDay] = useState(days[0] || null);

  useEffect(() => {
    if (!selectedDay && days.length > 0) {
      setSelectedDay(days[0]);
    }
  }, [days, selectedDay]);

  return (
    <div className="bg-neutral-800 mt-8 px-4 py-5  rounded-2xl ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium tracking-wide">Hourly forecast</h2>
        <div className="relative w-fit">
          <select
            className="w-34 bg-neutral-600 rounded-lg text-md px-3 py-1 appearance-none cursor-pointer"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {Object.keys(grouped).map((day) => (
              <option key={day} value={day}>
                {new Date(day).toLocaleDateString("en-US", { weekday: "long" })}
              </option>
            ))}
          </select>
          <DropdownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none" />
        </div>
        {/* <button className="bg-neutral-600   px-4 py-1.5 rounded-lg flex items-center gap-3">
          Tuesday
        </button> */}
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
        {grouped[selectedDay]?.map((item) => (
          <HourlyForecastCard
            key={item.time}
            hour={item.time}
            temp={item.temp}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
