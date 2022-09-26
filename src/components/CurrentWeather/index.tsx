import { Component, For, Show } from "solid-js";
import { ResultWeatherWindow } from "../../utils";
import { getMatchingAnimals } from "../../utils/animals/getMatchingAnimals";
import { AnimalRow } from "../AnimalRow";
import { showWeatherOnly } from "../App";
import "./style.css";

interface CurrentWeatherProps {
  weatherWindow: ResultWeatherWindow;
}

export const CurrentWeather: Component<CurrentWeatherProps> = (props) => {
  const matchingAnimals = getMatchingAnimals(props.weatherWindow);

  return (
    <div class="weatherRow">
      <fieldset>
        <legend>Local time</legend>
        <time class="localDate">
          {props.weatherWindow.localTime.toDateString()} {props.weatherWindow.localTime.toLocaleTimeString()}
        </time>
      </fieldset>
      <fieldset>
        <legend>Previous Eorzea time</legend>
        <div class="previousEorzeaTime">
          {props.weatherWindow.previousEorzeaTime}
        </div>
      </fieldset>
      <fieldset>
        <legend>Previous weather</legend>
        <div class="previousWeather">{props.weatherWindow.previousWeather}</div>
      </fieldset>
      <fieldset>
        <legend>Eorzea time</legend>
        <div class="eorzeaTime">{props.weatherWindow.eorzeaTime}</div>
      </fieldset>
      <fieldset>
        <legend>Current weather</legend>
        <div class="currentWeather">{props.weatherWindow.currentWeather}</div>
      </fieldset>
      <div class="matchingAnimals">
        <For each={matchingAnimals}>
          {(animal) => (
            <Show when={!showWeatherOnly() || (showWeatherOnly() && animal.weather !== undefined)}>
              <AnimalRow animal={animal} />
            </Show>
          )}
        </For>
      </div>
    </div>
  );
};
