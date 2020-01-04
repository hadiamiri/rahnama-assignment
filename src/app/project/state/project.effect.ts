import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProjectService} from "../project-service/project.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {LoadProject, LoadProjectFail, LoadProjectsSuccess} from "./project.action";
import {Injectable} from "@angular/core";

@Injectable()
export class ProjectEffects {
  constructor(private actions: Actions, private projectService: ProjectService) {
  }

  loadProjects = createEffect(() => this.actions.pipe(
    ofType(LoadProject),
    mergeMap(() => this.projectService.getProjects()
      .pipe(map(projects => (LoadProjectsSuccess({payload: projects}))),
        catchError(() => of(LoadProjectFail()))
      )
    )
  ))
}
