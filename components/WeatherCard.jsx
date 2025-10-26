// components/WeatherCard.jsx
import bgTodaySmall from "../src/assets/images/bg-today-small.svg";
import bgTodayLarge from "../src/assets/images/bg-today-large.svg";
import IconSunny from "../src/assets/images/icon-sunny.webp";

export default function WeatherCard() {
  return (
    <div className="relative h-72 rounded-2xl overflow-hidden mt-8 ">
      <img
        src={bgTodaySmall}
        alt=""
        className="absolute    block desktop:hidden"
      />

      <img
        src={bgTodayLarge}
        alt=""
        className="absolute hidden desktop:block"
      />

      <div className="relative z-10 h-full m-auto flex flex-col items-center justify-center space-y-2.5 desktop:flex-row">
        <h2 className="text-3xl  font-semibold">Berlin, Germany</h2>
        <p className="text-lg text-neutral-200">Tuesday, Aug 5, 2025</p>
        <div className="flex items-center space-x-6">
          <img src={IconSunny} alt="Sunny weather" className="w-30 h-30" />
          <p className="text-8xl  font-semibold tracking-wide italic">68°</p>
        </div>
      </div>
    </div>
  );
}
