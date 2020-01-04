import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ProjectState} from "../../state/project.state";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";

@Component({
  selector: 'rh-delivery-status-form',
  templateUrl: './delivery-status-form.component.html',
  styleUrls: ['./delivery-status-form.component.scss']
})
export class DeliveryStatusFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<ProjectState>) {

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
    addressLine1: ['', Validators.required],
    addressLine2: ['', Validators.required],
    postCode: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required]
  });

  projectDeliveryStatusFormSubmit() {

    console.log(this.deliveryStatusForm.value);

    this.store.dispatch(SetFormStepName({
      payload: ProjectFormsSteps.ProjectReview
    }));
    this.store.dispatch(SetFormStepCount({
      payload: 4
    }));
  }

}
