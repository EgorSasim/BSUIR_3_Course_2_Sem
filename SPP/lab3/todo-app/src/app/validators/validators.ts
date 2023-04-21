import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function sameValuesValidator(
  firstControlPath: string,
  secondControlPath: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const firstControlValue = formGroup.get(firstControlPath).value;
    const secondControlValue = formGroup.get(secondControlPath).value;

    if (!secondControlValue) {
      return null;
    }

    return firstControlValue !== secondControlValue
      ? {
          notSameValues: {
            value1: firstControlValue,
            value2: secondControlValue,
          },
        }
      : null;
  };
}
