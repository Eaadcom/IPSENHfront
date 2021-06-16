import {Component, EventEmitter, Input, Output} from '@angular/core';
import {getDeepFromObject} from '@nebular/auth';

@Component({
  selector: 'app-user-preference-form',
  templateUrl: './user-preference-form.component.html',
  styleUrls: []
})
export class UserPreferenceFormComponent {

  @Input() user: any;
  @Input() options: any;
  @Input() submitted: boolean;
  @Output() formSubmit: EventEmitter<any>;

  constructor() {
    this.user = {};
    this.options = {};
    this.submitted = false;
    this.formSubmit = new EventEmitter<any>();
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.options, key, null);
  }

  onSubmit(): void {
    this.formSubmit.emit();
  }
}
