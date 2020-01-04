import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProjectState} from "../../state/project.state";
import {Store} from "@ngrx/store";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";
import {ProjectFormService} from "../project-form-service/project-form.service";

@Component({
  selector: 'rh-project-detail-form',
  templateUrl: './project-detail-form.component.html',
  styleUrls: ['./project-detail-form.component.scss']
})
export class ProjectDetailFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private projectFormService: ProjectFormService,
              private store: Store<ProjectState>) { }

  ngOnInit() {
  }

  projectDetailForm = this.formBuilder.group({
    projectName: [this.projectFormService.projectDetailModel.ProjectName || '', Validators.required],
    projectOwner: [this.projectFormService.projectDetailModel.ProjectOwner, Validators.required],
    customerName: [this.projectFormService.projectDetailModel.CustomerName, Validators.required],
    contactPhone: [this.projectFormService.projectDetailModel.ContactPhone, Validators.required],
    emailAddress: [this.projectFormService.projectDetailModel.EmailAddress, Validators.compose([
      Validators.required, Validators.email
    ])],
    companySite: [this.projectFormService.projectDetailModel.CompanySite, Validators.compose([
      Validators.required
    ])]
  });


  projectDetailFormSubmit() {

    const formValue = this.projectDetailForm.value;

    this.projectFormService.projectDetailModel.ProjectName = formValue.projectName;
    this.projectFormService.projectDetailModel.ProjectOwner = formValue.projectOwner;
    this.projectFormService.projectDetailModel.CustomerName = formValue.customerName;
    this.projectFormService.projectDetailModel.ContactPhone = formValue.contactPhone;
    this.projectFormService.projectDetailModel.EmailAddress = formValue.emailAddress;
    this.projectFormService.projectDetailModel.CompanySite = formValue.companySite;

    this.store.dispatch(SetFormStepCount({payload: 2}));
    this.store.dispatch(SetFormStepName({payload: ProjectFormsSteps.ProjectSetting}));
  }


}
