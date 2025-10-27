import "./App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import MetricsCard from "../components/MetricsCard";

function App() {
  return (
    <div className="p-4 desktop:max-w-360 desktop:m-auto">
      <Header />
      <SearchBar />
      <WeatherCard />
      <div className="grid grid-cols-2 gap-4 mt-5">
        <MetricsCard title="Feels Like" value="64" unit="°" />
        <MetricsCard title="Humidity" value="46" unit="%" />
        <MetricsCard title="Wind" value="9" unit="mph" />
        <MetricsCard title="Precipitation" value="0" unit="in" />
      </div>
    </div>
  );
}

export default App;
