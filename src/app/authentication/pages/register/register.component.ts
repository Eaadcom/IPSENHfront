import {Component} from '@angular/core';
import {NbAuthResult, NbRegisterComponent} from '@nebular/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends NbRegisterComponent {

  onFormSubmit(): void {
    this.register();
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;

      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = Object.values(result.getResponse().error);
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => this.router.navigateByUrl(redirect), this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

  getOptions(): any {
    return this.options;
  }

}
