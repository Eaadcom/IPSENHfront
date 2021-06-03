import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Codesnippet} from '../../models/codesnippet.model';
import {MatDialog} from '@angular/material/dialog';
import {CudDialogComponent} from '../cud-dialog/cud-dialog.component';

@Component({
  selector: 'app-codesnippet-overview',
  templateUrl: './codesnippet-overview.component.html',
  styleUrls: ['./codesnippet-overview.component.scss']
})
export class CodesnippetOverviewComponent implements OnInit {

  codesnippets: Codesnippet[] = [];

  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.codesnippets = this.route.snapshot.data.Codesnippets;
  }

  openEditForm(codesnippet: Codesnippet): void {
    console.log('werkt' + codesnippet.id);
    this.openDialog(codesnippet);
  }

  openDialog(editableCodesnippet: Codesnippet): void {
    this.dialog.open(CudDialogComponent);
  }



}
