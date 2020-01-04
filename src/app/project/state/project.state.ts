import {ProjectFormsSteps, ProjectItem} from "./project.model";


export interface ProjectState {
  Projects: ProjectItem[],
  CurrentStepCount: number,
  CurrentStepName: ProjectFormsSteps
}

export const initialState: ProjectState = {
  Projects : [],
  CurrentStepCount : 1,
  CurrentStepName: ProjectFormsSteps.ProjectDetail
};
