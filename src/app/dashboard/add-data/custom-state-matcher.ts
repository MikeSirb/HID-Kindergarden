import {ErrorStateMatcher} from "@angular/material/core";
import {AbstractControl, FormGroupDirective, NgForm} from "@angular/forms";

export class CustomErrorStateMatcher implements ErrorStateMatcher{

    isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {

        if( control?.touched && (control.errors?.['required'] || control.errors?.['pattern'] || control.errors?.['invalidMaxAge'] || control.errors?.['invalidMinAge']) ){
            return true;
        }
        return false;
    }

}
