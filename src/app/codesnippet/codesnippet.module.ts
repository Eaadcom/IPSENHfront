import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CodesnippetModule { }
