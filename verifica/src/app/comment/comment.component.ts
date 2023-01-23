import { Component, Input } from '@angular/core';
import { risposte } from '../models/risposta'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() risposta! : risposte

}
