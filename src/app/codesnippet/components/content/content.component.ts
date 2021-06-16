import {Component, Input} from '@angular/core';
import {Codesnippet} from '../../models/codesnippet.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {

  @Input() form = false;
  @Input() codesnippet!: Codesnippet;
}
