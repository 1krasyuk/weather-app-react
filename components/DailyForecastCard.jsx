export default function DailyForecastCard({ day, icon, maxTemp, minTemp }) {
  return (
    <div className="bg-neutral-800 px-2.5 py-3 space-y-4 rounded-xl border border-neutral-600">
      <p className="text-lg text-center">{day}</p>
      <div className="flex justify-center">{icon}</div>
      <div className="flex justify-between">
        <p>{maxTemp}°</p>
        <p className="text-neutral-200">{minTemp}°</p>
      </div>
    </div>
  );
}
