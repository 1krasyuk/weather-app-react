import "./App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

function App() {
  return (
    <div className="p-4 desktop:max-w-360 desktop:m-auto">
      <Header />
      <SearchBar />
      <WeatherCard />
    </div>
  );
}

export default App;
