import { AbstractControl, ValidationErrors } from "@angular/forms";

export class OwnValidators {
    //AbstractControl = le da igual quien lo llame
    static longitudMaxima(control:AbstractControl):ValidationErrors | null {
        //validación pura de javascript
        let campo:string=control.value;
        if(campo.length<= 10) {
            //es correcto
            return null;    //El campo cumple la condicion
        } else {
            //no es correcto
            return {longMax : true} //true = hay error
        }
    }
}