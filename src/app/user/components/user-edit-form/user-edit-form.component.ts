import {Component, Input} from '@angular/core';
import {formConfiguration} from './form-configuration';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent {

  @Input() user: any;
  @Input() submitted: boolean;

  constructor(
    private userService: UserService,
  ) {
    this.user = {};
    this.submitted = false;
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  getOptions(): any {
    return formConfiguration;
  }
}
