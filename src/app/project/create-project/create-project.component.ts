import {Component, OnInit} from '@angular/core';
import {ProjectState} from "../state/project.state";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ProjectFormsSteps} from "../state/project.model";
import {currentStepNameSelector} from "../state/project.selector";
import {ProjectFormService} from "./project-form-service/project-form.service";

@Component({
  selector: 'rh-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [ProjectFormService]
})
export class CreateProjectComponent implements OnInit {

  currentStepNameObservable: Observable<ProjectFormsSteps>;
  projectFormSteps = ProjectFormsSteps;

  constructor(private readonly store: Store<ProjectState>) {
  }

  ngOnInit() {
    this.currentStepNameObservable = this.store.pipe(select(currentStepNameSelector));
  }
}
