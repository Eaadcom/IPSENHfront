import {Component, Input, OnInit} from '@angular/core';
import {CodesnippetService} from '../../services/codesnippet.service';
import {Codesnippet} from '../../models/codesnippet.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../authentication/services/authentication.service';
import {CodesnippetInterface} from '../../interfaces/codesnippet.interface';
import {NbDialogRef} from '@nebular/theme';
import {CudDialogComponent} from '../cud-dialog/cud-dialog.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  @Input() codesnippet = {} as Codesnippet;
  @Input() codesnippets = {} as Codesnippet[];
  @Input() dialogRef?: NbDialogRef<CudDialogComponent>;
  backupSnippet = {} as Codesnippet;
  formBuilder: FormBuilder = new FormBuilder();
  snippetForm: FormGroup = new FormGroup({}, undefined, undefined);
  themeOptions = Array<string>();
  languageOptions = Array<string>();
  newCodesnippet = false;

  constructor(private service: CodesnippetService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    if (typeof this.codesnippet.id !== 'number') {
      this.isNewCodesnippet();
      this.buildForm();
    }
    this.setBackupSnippet();
    this.setLanguageOptions();
    this.setThemeOptions();
    this.buildForm();
  }

  saveForm(): void {
    const codesnippet = this.snippetForm.value as CodesnippetInterface;
    codesnippet.content = this.codesnippet.content;
    codesnippet.theme = this.codesnippet.theme;
    if (this.newCodesnippet) {
      this.createCodesnippet(codesnippet);
    } else {
      this.updateCodesnippet(codesnippet);
    }
  }


  capatalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  setCodesnippetTheme(theme: string): void {
    this.codesnippet.theme = theme;
  }

  deleteCodesnippet(): void {
    this.dialogRef?.close();
    this.service.deleteCodesnippet(this.codesnippet.id).subscribe(response => {
    }, error => {
      this.resetSnippet();
    }, () => {
      this.removeCodesnippetById(this.codesnippet.id);
    });
  }

  private updateCodesnippet(codesnippet: Codesnippet): void {
    this.dialogRef?.close();
    this.service.updateCodesnippet(codesnippet.id, codesnippet).subscribe(response => {
    }, error => {
      this.resetSnippet();
    });
  }

  private createCodesnippet(codesnippet: Codesnippet): void {
    const id = this.authService.getLocalUser()?.id;
    if (id) {
      codesnippet.user_id = id;
    }
    this.service.addCodesnippet(codesnippet).subscribe(response => {
      try {
        // @ts-ignore
        codesnippet.id = response.id;
      } catch (e) {
        alert('Codesnippet id niet gevonden.');
      }
    }, error => {
      this.resetSnippet();
      this.dialogRef?.close();
    }, () => {
      this.codesnippets.splice(1, 0, codesnippet);
      this.dialogRef?.close();
      this.resetSnippet();
    });
  }

  private removeCodesnippetById(id: number): void {
    this.codesnippets.forEach((item, index) => {
      if (item.id === id) {
        this.codesnippets.splice(index, 1);
      }
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

  private setBackupSnippet(): void {
    Object.assign(this.backupSnippet, this.codesnippet);
  }

  private resetSnippet(): void {
    Object.assign(this.codesnippet, this.backupSnippet);
  }

  private isNewCodesnippet(): void {
    this.newCodesnippet = true;
  }
}
