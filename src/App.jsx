import "./App.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function App() {
  return (
    <div className="p-3.5">
      <Header />
      <h1 className="text-neutral-0 text-center text-5xl font-semibold font-family-bricolage tracking-wide my-10 leading-14">
        How's the sky looking today?
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;
