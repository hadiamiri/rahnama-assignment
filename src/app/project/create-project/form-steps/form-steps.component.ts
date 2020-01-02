import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'rh-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.scss']
})
export class FormStepsComponent implements OnInit {

  currentStepObservable: Observable<number>;
  currentStepCount: number;

  constructor(private store: Store<{ stepCount: number }>) {
    debugger;
    this.currentStepObservable = store.pipe(select('stepCount'));
  }

  ngOnInit() {
    this.currentStepCount = 1;
    this.currentStepObservable.subscribe(value => {
        console.log(value);
        this.currentStepCount = value;
      }
    );
  }


}
