import { DropdownIcon } from "./icons/DropdownIcon";
import HourlyForecastCard from "./HourlyForecastCard";

export default function HourlyForecastList() {
  return (
    <div className="bg-neutral-800 mt-8 px-4 py-5 rounded-2xl ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium tracking-wide">Hourly forecast</h2>
        <button className="bg-neutral-600 text-md  px-4 py-1.5 rounded-lg flex items-center gap-3">
          Tuesday
          <DropdownIcon className="w-3 h-3 transition-transform duration-150 " />
        </button>
      </div>
      <HourlyForecastCard />
    </div>
  );
}
