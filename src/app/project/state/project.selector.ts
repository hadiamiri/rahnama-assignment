import {createSelector} from "@ngrx/store";
import {ProjectState} from "./project.state";

export const currentStepNameSelector = createSelector(state => state["projectState"],
  (state: ProjectState) => state.CurrentStepName);

export const currentStepCountSelector = createSelector(state => state["projectState"],
  (state: ProjectState) => state.CurrentStepCount);

export const projectListSelector = createSelector(state => state['projectState'],
  (state: ProjectState) => state.Projects);
