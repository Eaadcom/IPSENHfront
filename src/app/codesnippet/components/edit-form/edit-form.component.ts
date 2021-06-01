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
  snippetForm: FormGroup = new FormGroup({}, undefined, undefined);
  themeOptions = Array<string>();
  languageOptions = Array<string>();
  newCodesnippet = true;

  constructor(private service: CodesnippetService, private authService: AuthenticationService) {
    this.service.getCodesnippetsByAuthenticatedUser().subscribe(response => {
      if (response[0] !== undefined) {
        this.codesnippet = response[0];
        this.isExistingCodesnippet();
        this.buildForm();
      }
    });
  }

  ngOnInit(): void {
    this.setLanguageOptions();
    this.setThemeOptions();
    this.buildForm();
  }

  saveForm(): void {
    const codesnippet = this.snippetForm.value as CodesnippetInterface;
    codesnippet.content = this.codesnippet.content;
    if (this.newCodesnippet) {
      this.createCodesnippet(codesnippet);
    } else {
      this.updateCodesnippet(codesnippet);
    }
  }
  deleteCodesnippet(): void {
    this.service.deleteCodesnippet(this.codesnippet.id).subscribe(response => {
      console.log(response);
    });
  }

  capatalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  private isExistingCodesnippet(): void {
    this.newCodesnippet = false;
  }

  private updateCodesnippet(codesnippet: Codesnippet): void {
    this.service.updateCodesnippet(codesnippet.id, codesnippet).subscribe(response => {
      console.log(response);
    });
  }

  private createCodesnippet(codesnippet: Codesnippet): void {
    const id = this.authService.getLocalUser()?.id;
    if (id){
      codesnippet.user_id = id;
    }
    this.service.addCodesnippet(codesnippet).subscribe(response => {
      console.log(response);
    });
  }

  private buildForm(): void {
    if (this.newCodesnippet) {
      this.snippetForm = new FormGroup({
        content: new FormControl(''),
        language: new FormControl(''),
        theme: new FormControl(''),
      });
    } else {
      this.snippetForm = this.formBuilder.group(this.codesnippet);
    }
  }

  private setThemeOptions(): void {
    this.themeOptions.push('dark');
    this.themeOptions.push('light');
  }

  private setLanguageOptions(): void {
    const languages = 'clike, ruby, crystal, csharp, dotnet, markup-templating, ' +
      'markup, xml, html, mathml, svg, django, jinja2, javascript, js, csp, css, d, dart, ' +
      'diff, docker, dockerfile, eiffel, elixir, elm, erb, erlang, flow, fortran, fsharp, ' +
      'gedcom, gherkin, git, glsl, go, graphql, groovy, haml, handlebars, haskell, haxe, ' +
      'hpkp, hsts, http, ichigojam, icon, inform7, ini, io, j, java, jolie, json, ' +
      'jsonp, jsx, julia, keyman, kotlin, latex, less, liquid, lisp, elisp, ' +
      'emacs, emacs-lisp, livescript, lolcode, lua, makefile, markdown, matlab, mel, ' +
      'mizar, monkey, n4js, n4jsd, nasm, nginx, nim, nix, nsis, ocaml, oz, parigp, parser, ' +
      'pascal, objectpascal, perl, php, sql, plsql, powershell, processing, prolog, properties, ' +
      'protobuf, pug, puppet, pure, python, q, qore, r, reason, renpy, rest, rip, roboconf, rust, ' +
      'sas, sass, scala, scheme, scss, smalltalk, smarty, soy, stylus, swift, tap, tcl, textile, ' +
      'tsx, tt2, twig, typescript, ts, velocity, verilog, vhdl, vim, visual-basic, vb, wasm, wiki, ' +
      'xeora, xeoracube, xojo, xquery, yaml';
    this.languageOptions.push(...languages.split(', '));
  }
}
