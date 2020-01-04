import {Component, OnInit} from '@angular/core';
import {ProjectItem} from "../state/project.model";
import {ProjectService} from "../project-service/project.service";
import {Observable} from "rxjs";
import {ProjectState} from "../state/project.state";
import {select, Store} from "@ngrx/store";
import {LoadProjects} from "../state/project.action";
import {projectListSelector} from "../state/project.selector";

@Component({
  selector: 'rh-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<ProjectItem[]>;

  constructor(private projectService: ProjectService, private store: Store<ProjectState>) {
    this.projects = this.store.pipe(select(projectListSelector));
  }

  ngOnInit() {
    this.store.dispatch(LoadProjects());
  }
}
