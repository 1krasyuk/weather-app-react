import { SearchIcon } from "./Icons/SearchIcon";

export default function SearchBar() {
  return (
    <div className="space-y-3">
      <div className="relative ">
        <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-200" />
        <input
          className="
      w-full pl-13 py-2.5 
      bg-neutral-800 text-neutral-0 font-medium text-lg
      rounded-xl 
      border-2 border-transparent
      focus:border-neutral-0 focus:outline-none
      placeholder:text-neutral-200
    "
          placeholder="Search for a place..."
        />
      </div>
      <button className="bg-blue-500 w-full rounded-lg py-2.5 text-lg">
        Search
      </button>
    </div>
  );
}
