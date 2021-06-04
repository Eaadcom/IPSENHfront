import {Component, Input, OnInit} from '@angular/core';
import {Codesnippet} from '../../models/codesnippet.model';

@Component({
  selector: 'app-cud-dialog',
  templateUrl: './cud-dialog.component.html',
  styleUrls: ['./cud-dialog.component.scss']
})
export class CudDialogComponent implements OnInit {

  @Input() codesnippet = {} as Codesnippet;

  constructor() { }

  ngOnInit(): void {

  }

}
