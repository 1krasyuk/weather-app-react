import "./App.css";

import { useState, useEffect } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import MetricsCard from "../components/MetricsCard";
import DailyForecastCard from "../components/DailyForecastCard";
import HourlyForecastList from "../components/HourlyForecastList";

import IconSunny from "../src/assets/images/icon-sunny.webp";

function App() {
  const [weather, setWeather] = useState({});
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (!city) return;
    const fetchWeatherData = async () => {
      try {
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=Moscow&count=10&language=en&format=json`
        );
        if (!geoResponse.ok)
          throw new Error("Error while fetching Geocoding API");

        const geoData = await geoResponse.json();
        const location = geoData.results?.[0];
        if (!location)
          throw new Error("City not found, check if your input is right");

        const { latitude, longitude } = location;

        const meteoRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,precipitation,wind_speed_10m,apparent_temperature,relative_humidity_2m,weather_code&timezone=auto`
        );
        if (!meteoRes.ok)
          throw new Error("Error while fetching Open Meteo API");

        const meteoData = await meteoRes.json();

        console.log(meteoData);

        setWeather(meteoData);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("Fetching complete");
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="p-4 desktop:max-w-360 desktop:m-auto">
      <Header />
      <h1 className="text-neutral-0 text-center text-[55px] font-semibold  font-family-bricolage my-12 leading-16">
        How's the sky looking today?
      </h1>
      <SearchBar />
      <WeatherCard />
      <div className="grid grid-cols-2 gap-4 my-5">
        <MetricsCard title="Feels Like" value="" unit="" />
        <MetricsCard title="Humidity" value="46" unit="%" />
        <MetricsCard title="Wind" value="9" unit="mph" />
        <MetricsCard title="Precipitation" value="0" unit="in" />
      </div>
      <h2 className="text-xl mt-8 font-medium tracking-wide">Daily forecast</h2>
      <div className="grid grid-cols-3 gap-4 my-5">
        <DailyForecastCard
          day="Tue"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="68"
          minTemp="57"
        />
        <DailyForecastCard
          day="Wed"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="70"
          minTemp="59"
        />
        <DailyForecastCard
          day="Thu"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="60"
          minTemp="55"
        />
        <DailyForecastCard
          day="Fri"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="75"
          minTemp="57"
        />
        <DailyForecastCard
          day="Sat"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="70"
          minTemp="59"
        />
        <DailyForecastCard
          day="Sun"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="77"
          minTemp="61"
        />
        <DailyForecastCard
          day="Mon"
          icon={<img src={IconSunny} alt="Sunny" className="w-15 h-15" />}
          maxTemp="75"
          minTemp="59"
        />
      </div>{" "}
      <HourlyForecastList />
    </div>
  );
}

export default App;
