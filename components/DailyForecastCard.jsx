export default function DailyForecastCard({ day, icon, maxTemp, minTemp }) {
  return (
    <div className="bg-neutral-800 px-2.5 py-3 space-y-4 rounded-xl border border-neutral-600">
      <p className="text-lg text-center">{day}</p>
      <img src={icon} alt="Sunny weather" className="w-15 mx-auto block" />

      <div
        className={`flex justify-between ${
          maxTemp <= 10 || minTemp <= 10 ? "px-1" : ""
        }`}
      >
        <p>{maxTemp}°</p>
        <p className="text-neutral-200">{minTemp}°</p>
      </div>
    </div>
  );
}
