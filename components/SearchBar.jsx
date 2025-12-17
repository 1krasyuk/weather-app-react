import { useSearchParams } from "react-router";
import { SearchIcon } from "./Icons/SearchIcon";
import { useRef } from "react";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    setSearchParams({ city: value });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      {/* desktop:flex desktop:w-200 desktop:gap-4 desktop:items-center desktop:mx-auto */}
      <div className="relative ">
        <SearchIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5.5 h-5.5 text-neutral-200" />
        <input
          className="
      w-full pl-15 py-3 
      bg-neutral-800 text-neutral-0 font-normal text-xl
      rounded-xl 
      border-2 border-transparent
      focus:border-neutral-0 focus:outline-none
      placeholder:text-neutral-200 "
          placeholder="Search for a place..."
          ref={inputRef}
          defaultValue={searchParams.get("city")}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 w-full rounded-xl py-3.5 text-xl cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
