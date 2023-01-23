import { Component, Input } from '@angular/core'
import { annunci } from '../models/annuncio.model'
import { risposte } from '../models/risposta'



@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.css']
})
export class AnnunciComponent {
  @Input() annunci! : annunci

  risposta_vett : risposte[] = []
  
  rispondi(risposta : HTMLInputElement, telefono : HTMLInputElement){
    this.risposta_vett.push(new risposte(risposta.value, telefono.value))
    console.log(this.risposta_vett)
  }


  
}
