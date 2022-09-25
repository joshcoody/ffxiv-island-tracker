import { WeatherType } from "../common";
import {
  calculateWeatherValue,
  convertToNearestEorzeanIntervalStart,
  convertToNearestRealIntervalStart,
  EORZEA_8_HOUR,
} from "./algorithm";
import { WeatherChances } from "./weatherChances";

export type TimeType = "00:00" | "08:00" | "16:00";

interface SearchCondition {
  area: string;
  targetWeather: WeatherType[];
  precedingWeather: WeatherType[];
  targetTime: Array<TimeType>;
}

const DEFAULT_SEARCH: SearchCondition[] = [{
  area: "unnamedIsland",
  targetWeather: [
    WeatherType.CLEAR_SKIES,
    WeatherType.CLOUDS,
    WeatherType.FAIR_SKIES,
    WeatherType.FOG,
    WeatherType.RAIN,
    WeatherType.SHOWERS,
  ],
  precedingWeather: [
    WeatherType.CLEAR_SKIES,
    WeatherType.CLOUDS,
    WeatherType.FAIR_SKIES,
    WeatherType.FOG,
    WeatherType.RAIN,
    WeatherType.SHOWERS,
  ],
  targetTime: ["00:00", "08:00", "16:00"],
}];

interface WeatherWindow {
  currentWeather: WeatherType;
  previousWeather: WeatherType;
  eorzeaTime: TimeType;
  previousEorzeaTime: TimeType;
  eorzeaTimestamp: number;
  nextEorzeaTimestamp: number;
}

export interface ResultWeatherWindow extends WeatherWindow {
  area: string;
  localTime: Date;
}

const testWeather = (condition: SearchCondition, window: WeatherWindow) => {
  return (
    condition.targetWeather.includes(window.currentWeather) &&
    condition.precedingWeather.includes(window.previousWeather) &&
    condition.targetTime.includes(window.eorzeaTime)
  );
};

const generateWeatherMap = (): WeatherType[] => {
  let result: WeatherType[] = [];

  for (const weather of WeatherChances) {
    result = result.concat(Array(weather.chance).fill(weather.type));
  }

  return result;
};

interface SeenAreas {
  [area: string]: boolean;
}

export const iterateConditions = (
  conditions: SearchCondition[],
  timestamp: number
): ResultWeatherWindow[] => {
  const results: ResultWeatherWindow[] = [];
  const seen: SeenAreas = {};
  const weatherMap = generateWeatherMap();

  for (const condition of conditions) {
    // Skip checking this condition if the current window already satisfies
    // another condition with the same area (this prevents duplicate results)
    if (seen[condition.area]) {
      continue;
    }

    const window: WeatherWindow = {
      currentWeather: weatherMap[calculateWeatherValue(timestamp)],
      previousWeather:
        weatherMap[calculateWeatherValue(timestamp - EORZEA_8_HOUR)],
      previousEorzeaTime: convertToNearestEorzeanIntervalStart(timestamp - EORZEA_8_HOUR),
      eorzeaTime: convertToNearestEorzeanIntervalStart(timestamp),
      eorzeaTimestamp: timestamp,
      nextEorzeaTimestamp: timestamp + EORZEA_8_HOUR,
    };

    if (testWeather(condition, window)) {
      seen[condition.area] = true; // mark this window as already added to results

      const nextResult: ResultWeatherWindow = {
        area: condition.area,
        previousWeather: window.previousWeather,
        currentWeather: window.currentWeather,
        eorzeaTime: window.eorzeaTime,
        previousEorzeaTime: window.previousEorzeaTime,
        localTime: convertToNearestRealIntervalStart(timestamp),
        eorzeaTimestamp: window.eorzeaTimestamp,
        nextEorzeaTimestamp: window.nextEorzeaTimestamp,
      }

      results.push(nextResult);
    }
  }

  return results;
};

export const findWeather = () => {
  const results = [];

  // Perform the search
  const maximumNumber = 10;
  const maximumCycles = 100000;
  const startDate = Date.now();

  for (let i = 0; i < maximumCycles; i++) {
    const timestamp = startDate + i * EORZEA_8_HOUR;
    const windows = iterateConditions(DEFAULT_SEARCH, timestamp);

    for (const window of windows) {
      results.push(window);

      if (results.length >= maximumNumber) {
        return results;
      }
    }
  }

  return results;
};