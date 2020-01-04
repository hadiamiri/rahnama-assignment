import {AbstractControl, FormArray, ValidatorFn} from "@angular/forms";

/**
 * Custom validator for selecting at least on check box in forms
 */
export function atLeastOneValidator(): ValidatorFn {

  return function(control: AbstractControl) :  {[key: string]: any} | null{
      let count = 0;

      let formArray = control as FormArray;

      formArray.controls.forEach((ctrl, idx) => {
        if (ctrl.value) {
          count++;
        }
      });

      if (count != 0) {
        return null;
      }

      return {'atLeastOne': {value: 1}};
  }
}
