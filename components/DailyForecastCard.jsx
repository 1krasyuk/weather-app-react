import { useUnits } from "../src/hooks/useUnits";
import { convertTemperature } from "../src/utils/convertUnits";

export default function DailyForecastCard({ day, icon, maxTemp, minTemp }) {
  const { units } = useUnits();

  return (
    <div className="bg-neutral-800 px-2.5 py-3 space-y-4 rounded-xl border border-neutral-600">
      <p className="text-lg text-center">{day}</p>
      <img src={icon} alt="Sunny weather" className="w-15 mx-auto block" />

      <div
        className={`flex justify-between ${
          maxTemp <= 10 || minTemp <= 10 ? "px-1" : ""
        }`}
      >
        <p>{convertTemperature(maxTemp, units.temperature)}°</p>
        <p className="text-neutral-200">
          {convertTemperature(minTemp, units.temperature)}°
        </p>
      </div>
    </div>
  );
}
