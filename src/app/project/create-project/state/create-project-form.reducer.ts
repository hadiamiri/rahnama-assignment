import {createReducer, on} from "@ngrx/store";

import {increment, decrement, reset} from "./create-project-form.action";

export const initialState = 1;

const _formStepCounterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => state = 0)
);

export function FormStepCounterReducer(state, action) {
  return _formStepCounterReducer(state, action);
}
