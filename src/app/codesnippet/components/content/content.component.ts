import {Component, Input, OnInit} from '@angular/core';
import {Codesnippet} from '../../models/codesnippet.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  @Input() form = false;
  @Input() codesnippet!: Codesnippet;

  constructor() {
  }

  ngOnInit(): void {
  }
}
