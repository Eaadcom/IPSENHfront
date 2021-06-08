import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatPageComponent} from './chat/pages/chat-page/chat-page.component';
import {LikeMatchListResolver} from './chat/resolvers/like-match-list.resolver';
import {MatchPageComponent} from './match/pages/match-page/match-page.component';
import {IsAuthenticatedGuard} from './authentication/guards/is-authenticated.guard';
import {CodesnippetResolver} from './codesnippet/resolver/codesnippet.resolver';
import {ProfilePageComponent} from './user/pages/profile-page/profile-page.component';
import {AuthUserResolver} from './authentication/resolver/auth-user.resolver';

const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {
    path: 'match',
    component: MatchPageComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'chat',
    component: ChatPageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {likeMatches: LikeMatchListResolver}
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    resolve: {
      codesnippets: CodesnippetResolver,
      authUser: AuthUserResolver,
    }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
