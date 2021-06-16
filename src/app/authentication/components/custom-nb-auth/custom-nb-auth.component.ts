import {Component} from '@angular/core';
import {NbAuthComponent} from '@nebular/auth';

@Component({
  selector: 'app-custom-nb-auth',
  templateUrl: './custom-nb-auth.component.html',
  styleUrls: ['./custom-nb-auth.component.scss']
})
export class CustomNbAuthComponent extends NbAuthComponent{
}
