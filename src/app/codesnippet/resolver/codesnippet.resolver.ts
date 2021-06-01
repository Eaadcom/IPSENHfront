import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Codesnippet} from '../models/codesnippet.model';
import {Observable} from 'rxjs';
import {CodesnippetService} from '../services/codesnippet.service';

@Injectable({
  providedIn: 'root'
})

export class CodesnippetResolver implements Resolve<Codesnippet[]> {
  constructor(private codesnippetService: CodesnippetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Codesnippet[]> | Promise<Codesnippet[]> | Codesnippet[] {
    return this.codesnippetService.getCodesnippetsByAuthenticatedUser();
  }


}
