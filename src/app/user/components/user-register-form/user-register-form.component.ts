import {Component, EventEmitter, Input, Output} from '@angular/core';
import {getDeepFromObject} from '@nebular/auth';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: []
})
export class UserRegisterFormComponent {

  @Input() user: any;
  @Input() options: any;
  @Input() columns: number;
  @Input() submitted: boolean;
  @Input() submitButtonText: any;
  @Output() formSubmit: EventEmitter<any>;

  constructor() {
    this.user = {};
    this.options = {};
    this.columns = 1;
    this.submitted = false;
    this.submitButtonText = 'Register';
    this.formSubmit = new EventEmitter<any>();
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  onSubmit(): void {
    this.formSubmit.emit();
  }

  isTwoColumnLayout(): boolean {
    return this.columns === 2;
  }
}
