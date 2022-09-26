import { Component, createSignal, For } from "solid-js";
import { findWeather, ResultWeatherWindow } from "../../utils/skywatcher";
import { CurrentWeather } from "../CurrentWeather";
import "./style.css";

export const [showWeatherOnly, setShowWeatherOnly] = createSignal(false);

export const App: Component = () => {
  const [weatherWindows, setWeatherWindows] = createSignal<
    ResultWeatherWindow[]
  >([]);
  return (
    <div>
      <div class="controls">
        <button
          class="findWeather"
          onClick={() => {
            const result = findWeather();
            console.log({ result });
            setWeatherWindows(result);
          }}
        >
          Find weather
        </button>
        <br />
        <br />
        <label for="weatherOnly">
          <input
            id="weatherOnly"
            type="checkbox"
            checked={showWeatherOnly()}
            onChange={(event) => {
              setShowWeatherOnly(event.currentTarget.checked);
            }}
          />{" "}
          Show only animals with weather requirements
        </label>
      </div>
      <br />
      <For
        each={weatherWindows()}
        fallback={<div class="noWeather">No weather to render</div>}
      >
        {(weather) => <CurrentWeather weatherWindow={weather} />}
      </For>
    </div>
  );
};
