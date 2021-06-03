import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { CodesnippetService } from './services/codesnippet.service';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CudDialogComponent } from './components/cud-dialog/cud-dialog.component';
import { CodesnippetOverviewComponent } from './components/codesnippet-overview/codesnippet-overview.component';
import {SharedModule} from '../shared/shared.module';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ContentComponent,
    EditFormComponent,
    CudDialogComponent,
    CodesnippetOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    CodesnippetService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CudDialogComponent],
})
export class CodesnippetModule { }
