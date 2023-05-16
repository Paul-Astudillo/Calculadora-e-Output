import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './mensaje/mensaje.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule , MensajeComponent],

  templateUrl: './main.html',
})
export class App {
  name = 'Paul';
  asignatura = 'Progra Web';


  items = ['item1', 'item2', 'paul'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }


  a = 50;
  b = 0;
  r = 0; //Resultado
  contador = 0;

  calcular() {
    console.log('hello Ups ' + this.a);
    this.contador = this.contador + 1;
    this.r = 0 + this.a + eval('' + this.b);
  }
  resta() {
    this.r = this.a - this.b;
  }

}

bootstrapApplication(App);
