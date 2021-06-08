import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatPageComponent} from './chat/pages/chat-page/chat-page.component';
import {LikeMatchListResolver} from './chat/resolvers/like-match-list.resolver';
import {MatchPageComponent} from './match/pages/match-page/match-page.component';
import {IsAuthenticatedGuard} from './authentication/guards/is-authenticated.guard';
import {CodesnippetOverviewComponent} from './codesnippet/components/codesnippet-overview/codesnippet-overview.component';
import {CodesnippetResolver} from './codesnippet/resolver/codesnippet.resolver';

const routes: Routes = [
  {
    path: 'match',
    component: MatchPageComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: 'codesnippet',
    component: CodesnippetOverviewComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {Codesnippets: CodesnippetResolver},
  },
  {
    path: 'chat',
    component: ChatPageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {likeMatches: LikeMatchListResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
