import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {LikeMatchService} from '../services/like-match.service';

@Injectable({
  providedIn: 'root'
})
export class LikeMatchListResolver implements Resolve<any> {

  constructor(private likeMatchService: LikeMatchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.likeMatchService.getOfAuthUser();
  }
}
