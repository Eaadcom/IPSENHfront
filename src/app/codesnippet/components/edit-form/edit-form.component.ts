import {Component, OnInit} from '@angular/core';
import {CodesnippetService} from '../../services/codesnippet.service';
import {Codesnippet} from '../../models/codesnippet.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit{

  public codesnippet = {} as Codesnippet;
  formBuilder: FormBuilder = new FormBuilder();
  snippetForm: FormGroup = this.formBuilder.group(this.codesnippet);

  constructor(private service: CodesnippetService) { }

  ngOnInit(): void {
    this.service.getCodesnippetsByAuthenticatedUser().subscribe(response => {
      this.codesnippet = response[0];
      this.buildForm();
    });
  }

  saveSnippet(): void {
    const codesnippet: Codesnippet = this.snippetForm.value;
    codesnippet.content = this.codesnippet.content;
    if (this.codesnippet.id !== null) {
      this.service.updateCodesnippet(codesnippet.id, codesnippet).subscribe(response => {
        console.log(response);
      });
    } else {
      this.service.addCodesnippet(codesnippet).subscribe(response => {
        console.log(response);
      });
    }

  }
  private buildForm(): void {
    this.snippetForm = this.formBuilder.group(this.codesnippet);
  }

}
