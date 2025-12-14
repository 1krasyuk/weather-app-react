export function convertTemperature(value, unit) {
  if (unit === "f") return Math.round((value * 9) / 5 + 32);
  return Math.round(value); // c
}

export function convertWind(value, unit) {
  if (unit === "mph") return Math.round(value / 1.609);
  return Math.round(value); // kmh
}

export function convertPrecipitation(value, unit) {
  if (unit === "in") return +(value / 25.4).toFixed(1);
  return value; // mm
}
