import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Codesnippet} from '../../models/codesnippet.model';
import {CudDialogComponent} from '../cud-dialog/cud-dialog.component';
import {NbDialogRef, NbDialogService} from '@nebular/theme';

@Component({
  selector: 'app-codesnippet-overview',
  templateUrl: './codesnippet-overview.component.html',
  styleUrls: ['./codesnippet-overview.component.scss']
})
export class CodesnippetOverviewComponent implements OnInit {

  @Input() codesnippets!: Codesnippet[];
  dialogRef!: NbDialogRef<CudDialogComponent>;

  constructor(private route: ActivatedRoute, private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.setupCodesnippets();
  }

  openEditForm(codesnippet?: Codesnippet): void {
    if (codesnippet) {
      this.openDialog(codesnippet);
    } else {
      this.openDialog({} as Codesnippet);
    }
  }

  openDialog(editableCodesnippet: Codesnippet): void {
    this.dialogRef = this.dialogService.open(CudDialogComponent, {
      context: {
        codesnippets: this.codesnippets,
        codesnippet: editableCodesnippet,
      },
      closeOnBackdropClick: this.isCloseableDialog(editableCodesnippet),
      closeOnEsc: this.isCloseableDialog(editableCodesnippet),
    });
  }

  private setupCodesnippets(): void {
    const emptyCodesnippet = this.setEmptyCodesnippet();
    this.codesnippets.unshift(emptyCodesnippet);
  }

  private isCloseableDialog(codesnippet: Codesnippet): boolean {
    return this.isNewCodesnippet(codesnippet);
  }

  private isNewCodesnippet(codesnippet: Codesnippet): boolean {
    return typeof codesnippet.id !== 'number';
  }

  private setEmptyCodesnippet(): Codesnippet {
    return new Codesnippet(null as any, null as any, '', 'basic', 'light', null as any, null as any);
  }
}
