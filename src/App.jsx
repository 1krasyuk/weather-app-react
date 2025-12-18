import "./App.css";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import MetricsCard from "../components/MetricsCard";
import DailyForecastCard from "../components/DailyForecastCard";
import HourlyForecastList from "../components/HourlyForecastList";
import MetricsList from "../components/MetricsList";

import IconSunny from "../src/assets/images/icon-sunny.webp";
import DailyForecastList from "../components/DailyForecastList";

function App() {
  const [weather, setWeather] = useState({});
  // const [loading, setLoading] = useState(false);
  const [searchParams, _] = useSearchParams("");
  const searchCity = searchParams.get("city") || "Berlin";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const geoResponse = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${searchCity}&count=10&language=en&format=json`
        );
        if (!geoResponse.ok)
          throw new Error("Error while fetching Geocoding API");

        const geoData = await geoResponse.json();
        const location = geoData.results?.[0];
        if (!location)
          throw new Error("City not found, check if your input is right");

        const { name: city, country, latitude, longitude } = location;

        const meteoRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=temperature_2m,precipitation,wind_speed_10m,apparent_temperature,relative_humidity_2m,weather_code&timezone=auto`
        );
        if (!meteoRes.ok)
          throw new Error("Error while fetching Open Meteo API");

        const meteoData = await meteoRes.json();

        setWeather({ city, country, ...meteoData });
        console.log("✅ MeteoData:", meteoData);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("Fetching complete");
      }
    };

    fetchWeatherData();
  }, [searchCity]);

  return (
    <div className="p-4 desktop:max-w-315 desktop:m-auto">
      <Header />
      <h1 className="text-neutral-0 text-center text-[55px] font-semibold  font-family-bricolage my-12 leading-16">
        How's the sky looking today?
      </h1>
      <SearchBar />
      <div className="desktop:grid desktop:items-start desktop:grid-cols-[2fr_1fr] desktop:gap-8 ">
        <div>
          <WeatherCard
            currentData={weather.current}
            city={weather.city}
            country={weather.country}
          />
          <MetricsList currentData={weather.current} />
          <h2 className="text-xl mt-8 font-medium tracking-wide">
            Daily forecast
          </h2>
          <DailyForecastList dailyData={weather.daily} />
        </div>

        <HourlyForecastList hourlyData={weather.hourly} />
      </div>
    </div>
  );
}

export default App;
