import { Component, Input } from '@angular/core'
import { annunci } from '../models/annuncio.model'



@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.css']
})
export class AnnunciComponent {
  @Input() annunci! : annunci


  
}
