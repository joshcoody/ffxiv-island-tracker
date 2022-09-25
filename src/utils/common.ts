export enum Restraint {
  NET = 'Makeshift Net',
  RESTRAINT = 'Makeshift Restraint',
  SOPORIFIC = 'Makeshift Soporific',
}

export interface Location {
  region?: string;
  x: number;
  y: number;
}

export enum WeatherType {
  CLEAR_SKIES = 'Clear Skies',
  FAIR_SKIES = 'Fair Skies',
  CLOUDS = 'Clouds',
  RAIN = 'Rain',
  FOG = 'Fog',
  SHOWERS = 'Showers'
}
