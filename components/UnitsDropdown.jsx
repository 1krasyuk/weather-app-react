import { useState, useRef, useEffect } from "react";
import { UnitsIcon } from "./icons/UnitsIcon";
import { DropdownIcon } from "./icons/DropdownIcon";
import { CheckmarkIcon } from "./icons/CheckmarkIcon";
import { useUnits } from "../src/hooks/useUnits";

const TEMP_OPTIONS = [
  { label: "Celsius (°C)", value: "c" },
  { label: "Fahrenheit (°F)", value: "f" },
];

const WIND_OPTIONS = [
  { label: "Kilometer (km/h)", value: "kmh" },
  { label: "Miles (mph)", value: "mph" },
];

const PRECIP_OPTIONS = [
  { label: "Millimeters (mm)", value: "mm" },
  { label: "Inches (in)", value: "in" },
];

export default function UnitsDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { units, setUnits } = useUnits();

  const handleSwitchAll = (to) => {
    if (to === "imperial") {
      setUnits({
        temperature: "f",
        wind: "mph",
        precipitation: "in",
      });
    } else {
      setUnits({
        temperature: "c",
        wind: "kmh",
        precipitation: "mm",
      });
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (category, value) => {
    setUnits((prev) => ({ ...prev, [category]: value }));
  };

  function Divider() {
    return <div className="border-t border-neutral-700 my-1" />;
  }

  function DropdownSection({ title, options, active, onSelect }) {
    return (
      <div className="py-1">
        <div className="px-4 py-1 text-xs uppercase tracking-wider text-neutral-400">
          {title}
        </div>

        {options.map(({ label, value }) => {
          const isActive = active === value;
          return (
            <button
              key={value}
              onClick={() => onSelect(value)}
              className={`flex items-center justify-between w-full px-4 py-1.5 text-sm rounded hover:bg-neutral-700 ${
                isActive ? "text-white font-medium" : "text-neutral-300"
              }`}
            >
              <span>{label}</span>
              {isActive && <CheckmarkIcon className="w-3.5 h-3.5" />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1.5 bg-neutral-800 px-2.5 py-1.5 rounded-md text-sm hover:bg-neutral-700 transition"
      >
        <UnitsIcon className="w-3.5 h-3.5" />
        Units
        <DropdownIcon
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-10">
          <button
            className="w-full text-left px-4 py-2 hover:bg-neutral-700 rounded-t-lg"
            onClick={() =>
              handleSwitchAll(units.temperature === "c" ? "imperial" : "metric")
            }
          >
            Switch to {units.temperature === "c" ? "Imperial" : "Metric"}
          </button>

          <Divider />

          <DropdownSection
            title="Temperature"
            options={TEMP_OPTIONS}
            active={units.temperature}
            onSelect={(val) => handleSelect("temperature", val)}
          />

          <Divider />

          <DropdownSection
            title="Wind speed"
            options={WIND_OPTIONS}
            active={units.wind}
            onSelect={(val) => handleSelect("wind", val)}
          />

          <Divider />

          <DropdownSection
            title="Precipitation"
            options={PRECIP_OPTIONS}
            active={units.precipitation}
            onSelect={(val) => handleSelect("precipitation", val)}
          />
        </div>
      )}
    </div>
  );
}
