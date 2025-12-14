import { createContext, useState, useEffect } from "react";

const UnitsContext = createContext(null);

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState(() => {
    const saved = localStorage.getItem("units");
    return saved
      ? JSON.parse(saved)
      : { temperature: "c", wind: "kmh", precipitation: "mm" };
  });

  useEffect(() => {
    localStorage.setItem("units", JSON.stringify(units));
  }, [units]);

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
}

export default UnitsContext;
