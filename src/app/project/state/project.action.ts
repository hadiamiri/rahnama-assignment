import {createAction, props} from "@ngrx/store";
import {ProjectFormsSteps, ProjectItem} from "./project.model";

export const SetFormStepName = createAction('[Project] Set Form Step Name'
  , props<{ payload: ProjectFormsSteps }>());

export const SetFormStepCount = createAction('[Project] Set Form Step Count',
  props<{ payload: number }>());

export const LoadProjects = createAction('[Project] Load Projects');

export const LoadProject = createAction('[Project] Load Projects');

export const LoadProjectsSuccess = createAction('[Project] Load Success'
  , props<{ payload: ProjectItem[] }>());

export const LoadProjectFail = createAction('[Project] Load Error');
