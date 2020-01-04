import {Action, createReducer, on} from "@ngrx/store";
import * as ProjectActions from './project.action';
import {initialState, ProjectState} from "./project.state";
import {Projects} from "@angular/cli/lib/config/schema";

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
  }),
  on(ProjectActions.LoadProjectFail, (state: ProjectState) => {
    return {
      ...state,
      Projects: []
    }
  }),
  on(ProjectActions.LoadProjectsSuccess, (state: ProjectState, {payload}) => {
    return {
      ...state,
      Projects: payload
    }
  })
);

export function ProjectReducer(state: ProjectState | undefined, action: Action) {
  return reducer(state, action);
}
