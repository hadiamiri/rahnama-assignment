import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectState} from "../../state/project.state";
import {Store} from "@ngrx/store";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps, ProjectItem} from "../../state/project.model";
import {ProjectFormService} from "../project-form-service/project-form.service";
import {ProjectService} from "../../project-service/project.service";

@Component({
  selector: 'rh-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {

  constructor(private readonly router: Router,
              private projectFormService: ProjectFormService,
              private projectService: ProjectService,
              private readonly  store: Store<ProjectState>) {
  }

  ngOnInit() {

  }

  goBack() {
    this.store.dispatch(SetFormStepName({
      payload: ProjectFormsSteps.ProjectDelivery
    }));
    this.store.dispatch(SetFormStepCount({
      payload: 3
    }));
  }

  finalSubmit() {

    let projectItem = {
      Id: Math.ceil(Math.random() * 100),
      ProjectName: this.projectFormService.projectDetailModel.ProjectName,
      ProjectOwner: this.projectFormService.projectDetailModel.ProjectOwner,
      CustomerName: this.projectFormService.projectDetailModel.CustomerName,
      ContactPhone: this.projectFormService.projectDetailModel.ContactPhone,
      ProjectEmailAddress: this.projectFormService.projectDetailModel.EmailAddress,
      CompanySite: this.projectFormService.projectDetailModel.CompanySite,
      SettingEmailAddress: this.projectFormService.projectSettingsModel.EmailAddress,
      Language: this.projectFormService.projectSettingsModel.Language,
      TimeZone: this.projectFormService.projectSettingsModel.TimeZone,
      Communication: this.projectFormService.projectSettingsModel.Communications,
      AddressLine1: this.projectFormService.projectDeliveryFormModel.AddressLine1,
      AddressLine2: this.projectFormService.projectDeliveryFormModel.AddressLine2,
      PostCode: this.projectFormService.projectDeliveryFormModel.PostCode,
      City: this.projectFormService.projectDeliveryFormModel.City,
      State: this.projectFormService.projectDeliveryFormModel.State,
      Country: this.projectFormService.projectDeliveryFormModel.Country
    };


    this.projectService.addProject(projectItem as ProjectItem)
      .subscribe(result => {
        this.store.dispatch(SetFormStepCount({
          payload: 1
        }));
        this.store.dispatch(SetFormStepName({
          payload: ProjectFormsSteps.ProjectDetail
        }));
        this.router.navigateByUrl("/project-list");
      });
  }
}
