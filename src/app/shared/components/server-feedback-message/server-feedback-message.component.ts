import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-feedback-message',
  templateUrl: './server-feedback-message.component.html',
  styleUrls: ['./server-feedback-message.component.scss']
})
export class ServerFeedbackMessageComponent implements OnInit {

  @Input() showMessages: any;
  @Input() errors?: string[];
  @Input() messages?: string[];
  @Input() displayMessage?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
