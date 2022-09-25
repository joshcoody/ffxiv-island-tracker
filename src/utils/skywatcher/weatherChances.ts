import { WeatherType } from "../common";

interface WeatherChance {
  type: WeatherType;
  chance: number;
}

export const WeatherChances: WeatherChance[] = [
  {
    type: WeatherType.CLEAR_SKIES,
    chance: 25,
  },
  {
    type: WeatherType.FAIR_SKIES,
    chance: 45,
  },
  {
    type: WeatherType.CLOUDS,
    chance: 10,
  },
  {
    type: WeatherType.RAIN,
    chance: 10,
  },
  {
    type: WeatherType.FOG,
    chance: 5,
  },
  {
    type: WeatherType.SHOWERS,
    chance: 5,
  }
];