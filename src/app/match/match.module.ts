import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PotentialMatchInfoComponent} from './components/potential-match-info/potential-match-info.component';
import {MatchButtonsComponent} from './components/match-buttons/match-buttons.component';
import {MatchPageComponent} from './pages/match-page/match-page.component';
import {NbCardModule, NbLayoutModule, NbButtonModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
import {CodesnippetModule} from '../codesnippet/codesnippet.module';

@NgModule({
  declarations: [
    PotentialMatchInfoComponent,
    MatchButtonsComponent,
    MatchPageComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbListModule,
    CodesnippetModule,
    NbSpinnerModule
  ],
  providers: [
    PotentialMatchInfoComponent
  ]
})
export class MatchModule { }
