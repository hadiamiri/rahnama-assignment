import {Component, OnInit} from '@angular/core';
import {ProjectItem, ProjectType, Status} from "../../shared/interfaces/project-interfaces";
import {ProjectService} from "../../shared/project-service";

@Component({
  selector: 'rh-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projectList: ProjectItem[];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.projectList = projects
      });
  }

}
