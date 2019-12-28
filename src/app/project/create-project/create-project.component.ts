import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from "@angular/forms";
import {atLeastOneValidator} from "../../core/custom-validator";

@Component({
  selector: 'rh-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {


  ProjectDetailsStep: string = 'project-details';
  ProjectSettingsStep: string = 'project-settings';
  DeliveryStatusStep: string = 'project-delivery-status';
  ReviewAndSubmit: string = 'review-and-submit';

  Communications = [{type: 'Email', id: 1}, {type: 'SMS', id: 2}, {type: 'Phone', id: 3}];

  currentStep: string;
  currentStepCount: number;
  selectedCommunications: string[];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.currentStep = this.ProjectDetailsStep;
    this.currentStepCount = 1;
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

  projectSettingsForm = this.formBuilder.group({
    emailAddress: ['', Validators.compose([
      Validators.required, Validators.email
    ])],
    language: ['', Validators.required],
    timeZone: ['', Validators.required],
    communications: this.buildCommunicationControls()
  });

  deliveryStatusForm = this.formBuilder.group({
    AddressLine1: ['', Validators.required],
    AddressLine2: ['', Validators.required],
    PostCode: ['', Validators.required],
    City: ['', Validators.required],
    State: ['', Validators.required],
    Country: ['', Validators.required]
  });


  buildCommunicationControls() {
    const controls =
      this.Communications.map((c) => this.formBuilder.control(false));

    return this.formBuilder.array(controls, atLeastOneValidator());
  }


  get communicationsArray() {
    return this.projectSettingsForm.get('communications') as FormArray;
  }

  communicationCheckboxChange() {
    let selectedCommunications: string[] = [];
    this.communicationsArray.controls.forEach((control, index) => {
      if (control.value) {
        selectedCommunications.push(this.Communications[index].type);
      }
    });

    this.selectedCommunications = selectedCommunications;
  }


  goBack(step) {
    this.currentStep = step;
    this.currentStepCount -= 1;
  }

  projectDetailFormSubmit() {
    this.currentStep = this.ProjectSettingsStep;
    this.currentStepCount += 1;
  }

  projectSettingsFormSubmit() {
    this.currentStep = this.DeliveryStatusStep;
    this.currentStepCount += 1;
    console.log(this.projectSettingsForm.value);
  }

  projectDeliveryStatusFormSubmit() {
    this.currentStep = this.ReviewAndSubmit;
    this.currentStepCount += 1;
    console.log(this.deliveryStatusForm.value);
  }

  finalSubmit() {
    console.log(this.projectDetailForm.value);
    console.log(this.projectSettingsForm.value);
    console.log(this.deliveryStatusForm.value);
  }
}
