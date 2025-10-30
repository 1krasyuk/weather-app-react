import iconSunny from "../assets/images/icon-sunny.webp";
import iconCloudy from "../assets/images/icon-overcast.webp";
import iconFog from "../assets/images/icon-fog.webp";
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import iconRain from "../assets/images/icon-rain.webp";
import iconSnow from "../assets/images/icon-snow.webp";
import iconStorm from "../assets/images/icon-storm.webp";

export function getWeatherIcon(code) {
  if (code === 0) return iconSunny;

  if ([1, 2, 3].includes(code)) return iconCloudy;
  if ([45, 48].includes(code)) return iconFog;
  if ([51, 53, 55, 56, 57].includes(code)) return iconDrizzle;
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return iconRain;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return iconSnow;
  if ([95, 96, 99].includes(code)) return iconStorm;

  return iconSunny;
}
