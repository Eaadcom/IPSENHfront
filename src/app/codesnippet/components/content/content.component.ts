import { Component, OnInit } from '@angular/core';
import {HighlightResult} from 'ngx-highlightjs/lib/highlight.model';
import * as hljs from 'highlight.js';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  editable = true;
  input = `function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello there!";
  document.getElementById("demo2").innerHTML = "How are you?";
}`;

  code: any;

  response: HighlightResult | undefined;

  constructor() {

  }

  public onChange(event: Event): void {

  }

  ngOnInit(): void {
    this.code = hljs.highlightAuto(this.input).value;
  }

  public onHighlight(event: any): void {
    this.response = {
      language: event.language,
      relevance: event.relevance,
      second_best: '{...}',
      top: '{...}',
      value: event.value
    };
  }
//  https://codepen.io/shotastage/pen/KaKwya

}
