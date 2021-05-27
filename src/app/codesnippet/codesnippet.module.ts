import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { CodesnippetService } from './services/codesnippet.service';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [ContentComponent, EditFormComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    CodesnippetService
  ]
})
export class CodesnippetModule { }
