import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProjectState} from "../../state/project.state";
import {Store} from "@ngrx/store";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";

@Component({
  selector: 'rh-project-detail-form',
  templateUrl: './project-detail-form.component.html',
  styleUrls: ['./project-detail-form.component.scss']
})
export class ProjectDetailFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<ProjectState>) { }

  ngOnInit() {
  }

  projectDetailForm = this.formBuilder.group({
    projectName: ['', Validators.required],
    projectOwner: ['', Validators.required],
    customerName: ['', Validators.required],
    contactPhone: ['', Validators.required],
    emailAddress: ['', Validators.compose([
      Validators.required, Validators.email
    ])],
    companySite: ['', Validators.compose([
      Validators.required
    ])]
  });


  projectDetailFormSubmit() {
    console.log(this.projectDetailForm.value);
    this.store.dispatch(SetFormStepCount({payload: 2}));
    this.store.dispatch(SetFormStepName({payload: ProjectFormsSteps.ProjectSetting}));
  }


}
