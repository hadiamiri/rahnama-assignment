import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {atLeastOneValidator} from "../../../core/custom-validator";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";
import {Store} from "@ngrx/store";
import {ProjectState} from "../../state/project.state";

@Component({
  selector: 'rh-project-settings-form',
  templateUrl: './project-settings-form.component.html',
  styleUrls: ['./project-settings-form.component.scss']
})
export class ProjectSettingsFormComponent implements OnInit {

  Communications = [{type: 'Email', id: 1}, {type: 'SMS', id: 2}, {type: 'Phone', id: 3}];

  selectedCommunications: { key: string, value: boolean }[] = [];

  projectSettingsForm = this.formBuilder.group({
    emailAddress: ['', Validators.compose([
      Validators.required, Validators.email
    ])],
    language: ['', Validators.required],
    timeZone: ['', Validators.required],
    communications: this.buildCommunicationControls()
  });

  constructor(private formBuilder: FormBuilder, private store: Store<ProjectState>) { }

  ngOnInit() {
  }


  buildCommunicationControls() {
    const controls =
      this.Communications.map((c) => this.formBuilder.control(false));

    return this.formBuilder.array(controls, atLeastOneValidator());
  }


  get communicationsArray() {
    return this.projectSettingsForm.get('communications') as FormArray;
  }

  communicationCheckboxChange() {
    let selectedCommunications: { key: string, value: boolean }[] = [];
    this.communicationsArray.controls.forEach((control, index) => {
      if (control.value) {
        selectedCommunications.push({key: this.Communications[index].type, value: true});
      } else {
        selectedCommunications.push({key: this.Communications[index].type, value: false});
      }
    });

    this.selectedCommunications = selectedCommunications;
  }

  goBack() {
    this.store.dispatch(SetFormStepCount({payload: 1}));
    this.store.dispatch(SetFormStepName({payload: ProjectFormsSteps.ProjectDetail}));
  }

  projectSettingsFormSubmit() {

    console.log(this.projectSettingsForm.value);
    this.store.dispatch(SetFormStepCount({payload: 3}));
    this.store.dispatch(SetFormStepName({payload: ProjectFormsSteps.ProjectDelivery}));
  }
}
