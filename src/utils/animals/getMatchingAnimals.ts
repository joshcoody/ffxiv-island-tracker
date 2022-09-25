import { ResultWeatherWindow } from "../skywatcher";
import { convertToNearestEorzeanInterval } from "../skywatcher/algorithm";
import { Animal } from "./animal";
import { AllAnimals } from "./database";

export const getMatchingAnimals = (
  weatherWindow: ResultWeatherWindow
): Animal[] => {
  const animals: Animal[] = AllAnimals.filter((animal) => {
    let spawnTimeMatch = true;
    let weatherMatch = true;
    if (animal.spawnTimeRange) {
      const eorzeaStart = convertToNearestEorzeanInterval(
        weatherWindow.eorzeaTimestamp
      );
      const eorzeaEnd =
        convertToNearestEorzeanInterval(weatherWindow.nextEorzeaTimestamp) ||
        23;
      const spawnStart = animal.spawnTimeRange.start;
      const spawnEnd = animal.spawnTimeRange.end;

      spawnTimeMatch =
        (spawnStart > eorzeaStart && spawnStart < eorzeaEnd) ||
        (spawnEnd > eorzeaStart && spawnEnd < eorzeaEnd) ||
        (eorzeaStart > spawnStart && eorzeaStart < spawnEnd) ||
        (eorzeaEnd > spawnStart && eorzeaEnd < spawnEnd);

      // spawnTimeMatch = eorzeaStart <= animal.spawnTimeRange.start && animal.spawnTimeRange.end <= eorzeaEnd;
    }
    if (animal.weather) {
      weatherMatch = animal.weather === weatherWindow.currentWeather;
    }

    return spawnTimeMatch && weatherMatch;
  });

  return animals.sort((a, b) => {
    if (!a.spawnTimeRange || !b.spawnTimeRange) {
      return 0;
    }
    return a.spawnTimeRange?.start - b.spawnTimeRange?.start
  });
};
