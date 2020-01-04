import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectState} from "../../state/project.state";
import {Store} from "@ngrx/store";
import {SetFormStepCount, SetFormStepName} from "../../state/project.action";
import {ProjectFormsSteps} from "../../state/project.model";

@Component({
  selector: 'rh-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {

  constructor(private readonly router: Router, private readonly  store: Store<ProjectState>) { }

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
    console.log('final form submit');
  }
}
