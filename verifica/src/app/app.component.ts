import { Component } from '@angular/core';
import { annunci } from './models/annuncio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'verifica';

  annunci_vett : annunci[] = []

  invia(nome : HTMLInputElement, telefono : HTMLInputElement, messaggio : HTMLInputElement){
    this.annunci_vett.push(new annunci(nome.value, telefono.value, messaggio.value))
    console.log(this.annunci_vett)

  }

}
