import {Component, Input} from '@angular/core';
import {Codesnippet} from '../../models/codesnippet.model';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-cud-dialog',
  templateUrl: './cud-dialog.component.html',
  styleUrls: ['./cud-dialog.component.scss']
})
export class CudDialogComponent {

  @Input() codesnippet = {} as Codesnippet;
  @Input() codesnippets = {} as Codesnippet[];

  constructor(public dialogRef: NbDialogRef<CudDialogComponent>) { }
}
