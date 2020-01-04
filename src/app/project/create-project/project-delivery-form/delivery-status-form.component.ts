import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ProjectState} from "../../state/project.state";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";
import {ProjectFormService} from "../project-form-service/project-form.service";

@Component({
  selector: 'rh-delivery-status-form',
  templateUrl: './delivery-status-form.component.html',
  styleUrls: ['./delivery-status-form.component.scss']
})
export class DeliveryStatusFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private projectFormService: ProjectFormService,
              private store: Store<ProjectState>) {

  }

  ngOnInit() {

  }

  goBack() {
      this.store.dispatch(SetFormStepName({
        payload: ProjectFormsSteps.ProjectSetting
      }));
      this.store.dispatch(SetFormStepCount({
        payload: 2
      }));
  }

  deliveryStatusForm = this.formBuilder.group({
    addressLine1: [this.projectFormService.projectDeliveryFormModel.AddressLine1, Validators.required],
    addressLine2: [this.projectFormService.projectDeliveryFormModel.AddressLine2, Validators.required],
    postCode: [this.projectFormService.projectDeliveryFormModel.PostCode, Validators.required],
    city: [this.projectFormService.projectDeliveryFormModel.City, Validators.required],
    state: [this.projectFormService.projectDeliveryFormModel.State, Validators.required],
    country: [this.projectFormService.projectDeliveryFormModel.Country, Validators.required]
  });

  projectDeliveryStatusFormSubmit() {

    const formValue = this.deliveryStatusForm.value;

    this.projectFormService.projectDeliveryFormModel.AddressLine1 = formValue.addressLine1;
    this.projectFormService.projectDeliveryFormModel.AddressLine2 = formValue.addressLine2;
    this.projectFormService.projectDeliveryFormModel.PostCode = formValue.postCode;
    this.projectFormService.projectDeliveryFormModel.City = formValue.city;
    this.projectFormService.projectDeliveryFormModel.State = formValue.state;
    this.projectFormService.projectDeliveryFormModel.Country = formValue.country;

    this.store.dispatch(SetFormStepName({
      payload: ProjectFormsSteps.ProjectReview
    }));
    this.store.dispatch(SetFormStepCount({
      payload: 4
    }));
  }

}
