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
    <form
      onSubmit={handleSubmit}
      className="
      space-y-3
    desktop:space-y-0
    desktop:flex desktop:items-center desktop:gap-4
    desktop:max-w-2xl desktop:mx-auto
  "
    >
      <div className="relative flex-1">
        <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-5.5 h-5.5 text-neutral-200" />
        <input
          ref={inputRef}
          defaultValue={searchParams.get("city") ?? ""}
          placeholder="Search for a place..."
          className="
        w-full pl-15 py-3
        bg-neutral-800 text-neutral-0 text-xl
        rounded-xl
        border-2 border-transparent
        focus:border-neutral-0 focus:outline-none
        placeholder:text-neutral-200
      "
        />
      </div>

      <button
        type="submit"
        className="
        w-full
    desktop:w-auto
      bg-blue-500
      px-8
      py-3.5
      text-xl
      rounded-xl
      whitespace-nowrap
    "
      >
        Search
      </button>
    </form>
  );
}
