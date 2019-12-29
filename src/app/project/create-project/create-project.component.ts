import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormArray} from "@angular/forms";
import {atLeastOneValidator} from "../../core/custom-validator";
import {ProjectService} from "../../shared/project-service";
import {ProjectItem} from "../../shared/interfaces/project-interfaces";
import {Router} from "@angular/router";

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
  selectedCommunications: { key: string, value: boolean }[] = [];

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService,
              private router: Router) {
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
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    postCode: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required]
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
    let projectItem = {
      Id: Math.ceil(Math.random() * 100),
      ProjectName: this.projectDetailForm.value.projectName,
      ProjectOwner: this.projectDetailForm.value.projectOwner,
      CustomerName: this.projectDetailForm.value.customerName,
      ContactPhone: this.projectDetailForm.value.contactPhone,
      ProjectEmailAddress: this.projectDetailForm.value.emailAddress,
      CompanySite: this.projectDetailForm.value.companySite,
      SettingEmailAddress: this.projectSettingsForm.value.emailAddress,
      Language: this.projectSettingsForm.value.language,
      TimeZone: this.projectSettingsForm.value.timeZone,
      Communication: this.projectSettingsForm.value.communications,
      AddressLine1: this.deliveryStatusForm.value.addressLine1,
      AddressLine2: this.deliveryStatusForm.value.addressLine2,
      PostCode: this.deliveryStatusForm.value.postCode,
      City: this.deliveryStatusForm.value.city,
      State: this.deliveryStatusForm.value.state,
      Country: this.deliveryStatusForm.value.country
    };

    console.log(projectItem);

    this.projectService.addProject(projectItem as ProjectItem)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl("/project-list");
      });
  }
}
