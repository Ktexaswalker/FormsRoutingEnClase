import { Component } from '@angular/core';
import { Actor } from '../../model/actor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compo3',
  standalone: true,
  imports: [
    FormsModule //importar el FormsModule, para usar la simbologia del formulario
  ],
  templateUrl: './compo3.component.html',
  styleUrl: './compo3.component.css'
})
export class Compo3Component {
  skills: string[] = ['Method Acting', 'Singing', 'Dancing', 'Fighting'];
  model = new Actor(18,'Tom Cruise', 'Dancing', 'CW Productions');

  submitted:boolean = false;

  onSubmit() {  //metodo que cambia el valor de submitted a true
    alert("hola he hecho el formulario");
    this.submitted = true;
    // this.model.name="Pedrito"; //Estoy accediento al set del objecto model
    // console.log(this.model.name); //Estoy accediendo al get del objeto model
  }
}
