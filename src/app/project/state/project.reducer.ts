import {Action, createReducer, on} from "@ngrx/store";
import * as ProjectActions from './project.action';
import {initialState, ProjectState} from "./project.state";

const reducer = createReducer(
  initialState,
  on(ProjectActions.SetFormStepCount, (state: ProjectState, {payload}) => {
    return {
      ...state,
      CurrentStepCount: payload
    }
  }),
  on(ProjectActions.SetFormStepName, (state: ProjectState, {payload}) => {
    return {
      ...state,
      CurrentStepName: payload
    }
  })
);

export function ProjectReducer(state: ProjectState | undefined, action: Action) {
  return reducer(state, action);
}
