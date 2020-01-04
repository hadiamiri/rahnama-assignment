import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {atLeastOneValidator} from "../../../core/custom-validator";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";
import {Store} from "@ngrx/store";
import {ProjectState} from "../../state/project.state";
import {ProjectFormService} from "../project-form-service/project-form.service";

@Component({
  selector: 'rh-project-settings-form',
  templateUrl: './project-settings-form.component.html',
  styleUrls: ['./project-settings-form.component.scss']
})
export class ProjectSettingsFormComponent implements OnInit {

  Communications = [{type: 'Email', id: 1}, {type: 'SMS', id: 2}, {type: 'Phone', id: 3}];
  selectedCommunications: { key: string, value: boolean }[] = [];
  projectSettingsForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private projectFormService: ProjectFormService,
              private store: Store<ProjectState>) {
  }

  ngOnInit() {

    this.selectedCommunications = this.projectFormService.projectSettingsModel.Communications;
    this.projectSettingsForm = this.formBuilder.group({
      emailAddress: [this.projectFormService.projectSettingsModel.EmailAddress,
        Validators.compose([
          Validators.required, Validators.email
        ])],
      language: [this.projectFormService.projectSettingsModel.Language,
        Validators.required],
      timeZone: [this.projectFormService.projectSettingsModel.TimeZone,
        Validators.required],
      communications: this.buildCommunicationControls()
    });
  }

  buildCommunicationControls() {
    const controls = [];
    this.Communications.map(item => {
      let selectedItem = this.selectedCommunications.filter(i => i.key == item.type)[0];
      if (!!selectedItem && selectedItem.value) {
        controls.push(this.formBuilder.control(true))
      } else {
        controls.push(this.formBuilder.control(false));
      }
    });
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
    const formValue = this.projectSettingsForm.value;

    this.projectFormService.projectSettingsModel.EmailAddress = formValue.emailAddress;
    this.projectFormService.projectSettingsModel.Language = formValue.language;
    this.projectFormService.projectSettingsModel.TimeZone = formValue.timeZone;
    this.projectFormService.projectSettingsModel.Communications = this.selectedCommunications;


    this.store.dispatch(SetFormStepCount({payload: 3}));
    this.store.dispatch(SetFormStepName({payload: ProjectFormsSteps.ProjectDelivery}));
  }
}
