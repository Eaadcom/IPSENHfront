import {Component, Input} from '@angular/core';
import {formConfiguration} from './form-configuration';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: []
})
export class UserEditFormComponent {

  @Input() user: any;
  @Input() submitted: boolean;
  showMessages: any;
  error = [] as string[];
  message = [] as string[];

  constructor(
    private userService: UserService,
  ) {
    this.showMessages = this.initializeShowMessage();
    this.message = [];
    this.user = {};
    this.submitted = false;
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe((response) => {
      this.resetMessages();
      this.showMessages.show = false;
      this.showMessages.success = true;
      this.message = ['Successfully updated user'];
    }, error => {
      this.handleErrors(error.error);
    });
  }

  getOptions(): any {
    return formConfiguration;
  }

  private handleErrors(errors: any): void {
    this.resetMessages();
    this.showMessages.show = false;
    this.showMessages.error = true;

    Object.keys(errors).forEach((k) => {
      this.error = this.error.concat(errors[k]);
    });
  }

  private initializeShowMessage(): any {
    return {
      show: true,
      error: false,
      success: false,
    };
  }

  private resetMessages(): void {
    this.message = [];
    this.error = [];
  }
}
