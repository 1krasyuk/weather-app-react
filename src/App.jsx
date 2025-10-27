import "./App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import MetricsCard from "../components/MetricsCard";
import DailyForecastCard from "../components/DailyForecastCard";

import IconSunny from "../src/assets/images/icon-sunny.webp";

function App() {
  return (
    <div className="p-4 desktop:max-w-360 desktop:m-auto">
      <Header />

      <SearchBar />
      <WeatherCard />
      <div className="grid grid-cols-2 gap-4 my-5">
        <MetricsCard title="Feels Like" value="64" unit="°" />
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
      </div>
    </div>
  );
}

export default App;
