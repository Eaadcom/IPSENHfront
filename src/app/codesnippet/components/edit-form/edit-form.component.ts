import {Component, OnInit} from '@angular/core';
import {CodesnippetService} from '../../services/codesnippet.service';
import {Codesnippet} from '../../models/codesnippet.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {CodesnippetInterface} from '../../interfaces/codesnippet.interface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit{

  public codesnippet = {} as Codesnippet;
  formBuilder: FormBuilder = new FormBuilder();
  snippetForm: FormGroup = this.formBuilder.group(this.codesnippet);

  constructor(private service: CodesnippetService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.service.getCodesnippetsByAuthenticatedUser().subscribe(response => {
      // this.codesnippet = response[0];
      this.buildForm();
    });
  }

  saveSnippet(): void {
    const codesnippet = this.snippetForm.value as CodesnippetInterface;
    console.log(codesnippet);
    codesnippet.content = this.codesnippet.content;
    if (codesnippet.id !== undefined) {
      this.service.updateCodesnippet(codesnippet.id, codesnippet).subscribe(response => {
        console.log(response);
      });
    } else {
      console.log(codesnippet.theme);
      const id = this.authService.getLocalUser()?.id;
      if (id){
        codesnippet.user_id = id;
      }
      this.service.addCodesnippet(codesnippet).subscribe(response => {
        console.log(response);
      });
    }

  }
  private buildForm(): void {
    if (this.codesnippet) {
      this.snippetForm = this.formBuilder.group(this.codesnippet);
    } else {
      this.snippetForm = new FormGroup({
        content: new FormControl(''),
        language: new FormControl(''),
        theme: new FormControl(''),
      });
    }
  }

}
