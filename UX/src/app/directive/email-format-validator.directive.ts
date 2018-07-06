import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailFormatValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailFormatValidatorDirective, multi: true}]
})
export class EmailFormatValidatorDirective  implements Validator {

  constructor() { }

  validate(c: FormControl): ValidationErrors {
    const isValidEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(c.value);
    const message = {
      'emailFormat': {
        'message': 'The email format must be valid.'
      }
    };
    return isValidEmailFormat ? null : message;
  }

}
