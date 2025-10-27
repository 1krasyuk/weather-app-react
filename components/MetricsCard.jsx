export default function MetricsCard({ title, value, unit }) {
  return (
    <div className="bg-neutral-800 px-5 py-4 space-y-4 rounded-xl border border-neutral-600">
      <p className="text-lg text-neutral-200">{title}</p>
      <p className="text-[33px] font-extralight leading-10">
        {value}
        {unit}
      </p>
    </div>
  );
}
