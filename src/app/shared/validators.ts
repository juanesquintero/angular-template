import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const minLengthTrim = (minLength: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const length = control.value.trim().length;
    return length > minLength || length == 0  ? null : { minLengthTrim: true };
  }
}
