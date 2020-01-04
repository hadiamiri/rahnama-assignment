# Rahnama front-end assignemnt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run fake json server with `json-server --watch db.json`

## State management
I have used `NgRx` version 8 for state management. There is `ProjectState` which contains list of projects
and also some state for the multi step form named `CurrentStepCount` and `CurrentStepName`

Relevent actions are dispatched from various components and components are subscribed to changes on those actions.

`form-step.component` uses `CurrentStepCount` state to highlight various stages of form.
`create-project.component` uses `CurrentStepName` to show specific form of data entry stages.

each of the sub form components dispatch state mutation data as we complete each form.

Reactive forms are used for implementing sub forms.

Project lists are retrieved with ngrx effects. 
