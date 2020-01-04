import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ProjectState} from "../../state/project.state";
import {currentStepCountSelector} from "../../state/project.selector";

@Component({
  selector: 'rh-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})
export class FormStepsComponent implements OnInit {
  currentStepObservable: Observable<number>;

  constructor(private store: Store<ProjectState>) {
  }

  ngOnInit() {
    this.currentStepObservable = this.store.pipe(select(currentStepCountSelector));
  }
}
