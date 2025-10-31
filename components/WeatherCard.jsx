import { getWeatherIcon } from "../src/utils/getWeatherIcon";
import { BgTodaySmall } from "./icons/BgTodaySmall";
import { BgTodayLarge } from "./icons/BgTodayLarge";

export default function WeatherCard({ currentData, city, country }) {
  if (!currentData) return null;

  const { time: date, weather_code, temperature_2m: temp } = currentData;
  const icon = getWeatherIcon(weather_code);

  const formatDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="relative h-72 rounded-2xl overflow-hidden mt-8 ">
      <BgTodaySmall className="absolute block desktop:hidden" />
      <BgTodayLarge className="absolute hidden desktop:block" />

      <div className="relative z-10 h-full m-auto flex flex-col items-center justify-center space-y-2.5 desktop:flex-row">
        <h2 className="text-3xl  font-semibold">
          {city}, {country}
        </h2>
        <p className="text-lg text-neutral-200">{formatDate}</p>
        <div className="flex items-center space-x-6">
          <img src={icon} alt="Sunny weather" className="w-30 h-30" />
          <p className="text-8xl  font-semibold tracking-wide italic">
            {temp.toFixed(0)}°
          </p>
        </div>
      </div>
    </div>
  );
}
