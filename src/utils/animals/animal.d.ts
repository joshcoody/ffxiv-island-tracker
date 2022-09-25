import { Location, Restraint, WeatherType } from '../common';

interface SpawnTimeRange {
  start: number;
  end: number;
}

export interface Animal {
  name: string;
  location: Location;
  restraintRequired: Restraint;
  spawnTimeRange?: SpawnTimeRange;
  weather?: WeatherType;
}