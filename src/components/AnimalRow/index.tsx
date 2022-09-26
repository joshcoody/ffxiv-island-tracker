import { Component, Show } from "solid-js";
import { Animal } from "../../utils/animals/animal";
import { convertTimeHourToString } from "../../utils/skywatcher/algorithm";

interface AnimalRowProps {
  animal: Animal;
}

export const AnimalRow: Component<AnimalRowProps> = (props) => {
  return (
    <div class="availableAnimal">
      <fieldset>
        <legend>Animal</legend>
        <div class="name">{props.animal.name}</div>
      </fieldset>
      <fieldset>
        <legend>Location</legend>
        <div class="location">
          {props.animal.location.region} (x: {props.animal.location.x}, y: {props.animal.location.y})
        </div>
      </fieldset>
      <fieldset>
        <legend>Restraint</legend>
        <div class="restraint">{props.animal.restraintRequired}</div>
      </fieldset>
      <fieldset>
        <legend>Time range</legend>
        <div class="range">
          <Show when={props.animal.spawnTimeRange !== undefined}>
            {convertTimeHourToString(props.animal.spawnTimeRange!.start)} - {convertTimeHourToString(props.animal.spawnTimeRange!.end)}
          </Show>
        </div>
      </fieldset>
      <fieldset>
        <legend>Weather</legend>
        <div class="weather">
          {props.animal.weather}
        </div>
      </fieldset>
    </div>
  );
};
