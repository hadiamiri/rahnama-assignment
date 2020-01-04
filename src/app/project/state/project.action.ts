import {createAction, props} from "@ngrx/store";
import {ProjectFormsSteps} from "./project.model";

export const SetFormStepName = createAction('[Project] Set Form Step Name'
  , props<{ payload: ProjectFormsSteps }>());

export const SetFormStepCount = createAction('[Project] Set Form Step Count',
  props<{ payload: number }>());
