import { Component } from '@angular/core';
//Importaciones de todo lo necesario para validar Reactive Forms
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnValidators } from '../../validators/ownValidators';

@Component({
  selector: 'app-compo2',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './compo2.component.html',
  styleUrl: './compo2.component.css'
})
export class Compo2Component {
  datosForm: string="";
  contactForm = new FormGroup({
    //FormControl('value',[array->Validators.atributo])
    nombre: new FormControl('',[
      Validators.required, 
      Validators.minLength(2), 
      Validators.pattern('[a-zA-Z ]+'),
      OwnValidators.longitudMaxima  //validador personalizado
    ]),
    email: new FormControl('',[
      Validators.required, 
      Validators.email
    ]),
    mensaje: new FormControl('',[
      Validators.required, 
      Validators.maxLength(200),
    ]) 
  });
  enviar():void {
    this.datosForm=`
    NOMBRES=${this.contactForm.value.nombre},
    MAIL=${this.contactForm.value.email},
    MENSAJE=${this.contactForm.value.mensaje}
    `;
  }
}
