import { Restraint, WeatherType } from "../common";
import { Animal } from "./animal";

export const AllAnimals: Animal[] = [
  {
    name: "Apkallu of Paradise",
    location: {
      x: 19,
      y: 11,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    spawnTimeRange: {
      start: 12,
      end: 15,
    },
  },
  {
    name: "Dodo of Paradise",
    location: {
      x: 16,
      y: 12,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.RESTRAINT,
    spawnTimeRange: {
      start: 15,
      end: 18,
    },
  },
  {
    name: "Glyptodom",
    location: {
      x: 31,
      y: 11,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.RESTRAINT,
    spawnTimeRange: {
      start: 0,
      end: 3,
    },
  },
  {
    name: "Island Billy",
    location: {
      x: 26,
      y: 22,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.SOPORIFIC,
    spawnTimeRange: {
      start: 3,
      end: 6,
    },
  },
  {
    name: "Lemur",
    location: {
      x: 20,
      y: 26,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    spawnTimeRange: {
      start: 6,
      end: 9,
    },
  },
  {
    name: "Stag",
    location: {
      x: 20,
      y: 19,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.RESTRAINT,
    spawnTimeRange: {
      start: 18,
      end: 21,
    },
  },
  {
    name: "Star Marmot",
    location: {
      x: 15,
      y: 19,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    spawnTimeRange: {
      start: 9,
      end: 12,
    },
  },
  {
    name: "Alligator",
    location: {
      x: 17,
      y: 24,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.SOPORIFIC,
    spawnTimeRange: {
      start: 6,
      end: 9,
    },
    weather: WeatherType.SHOWERS,
  },
  {
    name: "Beachcomb",
    location: {
      x: 17,
      y: 12,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    spawnTimeRange: {
      start: 0,
      end: 3,
    },
    weather: WeatherType.RAIN,
  },
  {
    name: "Black Chocobo",
    location: {
      x: 13,
      y: 11,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.RESTRAINT,
    weather: WeatherType.CLEAR_SKIES,
  },
  {
    name: "Gold Back",
    location: {
      x: 31,
      y: 28,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.SOPORIFIC,
    weather: WeatherType.RAIN,
  },
  {
    name: "Goobbue",
    location: {
      x: 33,
      y: 16,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.SOPORIFIC,
    spawnTimeRange: {
      start: 9,
      end: 12,
    },
    weather: WeatherType.CLOUDS,
  },
  {
    name: "Grand Buffalo",
    location: {
      x: 12,
      y: 17,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.SOPORIFIC,
    weather: WeatherType.CLOUDS,
  },
  {
    name: "Ornery Karakul",
    location: {
      x: 20,
      y: 23,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    weather: WeatherType.FAIR_SKIES,
  },
  {
    name: "Paissa",
    location: {
      x: 24,
      y: 28,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.RESTRAINT,
    spawnTimeRange: {
      start: 12,
      end: 15,
    },
    weather: WeatherType.FAIR_SKIES,
  },
  {
    name: "Twinklefleece",
    location: {
      x: 22,
      y: 20,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    spawnTimeRange: {
      start: 18,
      end: 21,
    },
    weather: WeatherType.FOG,
  },
  {
    name: "Yellow Coblyn",
    location: {
      x: 27,
      y: 19,
      region: "Unnamed Island",
    },
    restraintRequired: Restraint.NET,
    weather: WeatherType.FOG,
  },
];
