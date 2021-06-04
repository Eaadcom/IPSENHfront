import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Codesnippet} from '../../models/codesnippet.model';
import {CudDialogComponent} from '../cud-dialog/cud-dialog.component';
import {NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-codesnippet-overview',
  templateUrl: './codesnippet-overview.component.html',
  styleUrls: ['./codesnippet-overview.component.scss']
})
export class CodesnippetOverviewComponent implements OnInit {

  codesnippets: Codesnippet[] = [];

  constructor(private route: ActivatedRoute, private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.codesnippets = this.route.snapshot.data.Codesnippets;
  }

  openEditForm(codesnippet: Codesnippet): void {
    this.openDialog(codesnippet);
  }

  openDialog(editableCodesnippet: Codesnippet): void {
    this.dialogService.open(CudDialogComponent, {
      context: {codesnippet: editableCodesnippet},
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
  }
}
