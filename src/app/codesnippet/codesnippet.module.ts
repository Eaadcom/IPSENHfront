import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { CodesnippetService } from './services/codesnippet.service';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';



@NgModule({
  declarations: [ContentComponent, EditFormComponent],
  imports: [
    CommonModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      } as HighlightOptions
    },
    CodesnippetService
  ]
})
export class CodesnippetModule { }
