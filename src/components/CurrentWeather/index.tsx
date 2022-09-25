import { Component, For, Show } from "solid-js";
import { ResultWeatherWindow } from "../../utils";
import { getMatchingAnimals } from "../../utils/animals/getMatchingAnimals";
import { convertTimeHourToString } from "../../utils/skywatcher/algorithm";
import { showWeatherOnly } from "../App";
import "./style.css";

interface CurrentWeatherProps {
  weatherWindow: ResultWeatherWindow;
}

export const CurrentWeather: Component<CurrentWeatherProps> = (props) => {
  const matchingAnimals = getMatchingAnimals(props.weatherWindow);

  return (
    <div class="weatherRow">
      <time class="localDate">
        {props.weatherWindow.localTime.toDateString()}
      </time>
      <time class="localTime">
        {props.weatherWindow.localTime.toLocaleTimeString()}
      </time>
      <div class="previousEorzeaTime">
        {props.weatherWindow.previousEorzeaTime}
      </div>
      <div class="previousWeather">{props.weatherWindow.previousWeather}</div>
      <div class="eorzeaTime">{props.weatherWindow.eorzeaTime}</div>
      <div class="currentWeather">{props.weatherWindow.currentWeather}</div>
      <div class="matchingAnimals">
        <For each={matchingAnimals}>
          {(animal) => (
            <Show when={!showWeatherOnly() || (showWeatherOnly() && animal.weather !== undefined)}>
              <div class="availableAnimal">
                <div class="name">{animal.name}</div>
                <div class="location">
                  {animal.location.region} (x: {animal.location.x}, y: {animal.location.y})
                </div>
                <div class="restraint">{animal.restraintRequired}</div>
                <div class="range">
                  <Show when={animal.spawnTimeRange !== undefined}>
                    {convertTimeHourToString(animal.spawnTimeRange!.start)} - {convertTimeHourToString(animal.spawnTimeRange!.end)}
                  </Show>
                </div>
                <div class="weather">
                  {animal.weather}
                </div>
              </div>
            </Show>
          )}
        </For>
      </div>
    </div>
  );
};
