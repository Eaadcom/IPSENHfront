import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PotentialMatchInfoComponent} from './components/potential-match-info/potential-match-info.component';
import {MatchButtonsComponent} from './components/match-buttons/match-buttons.component';
import {MatchPageComponent} from './pages/match-page/match-page.component';



@NgModule({
  declarations: [
    PotentialMatchInfoComponent,
    MatchButtonsComponent,
    MatchPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PotentialMatchInfoComponent
  ]
})
export class MatchModule { }
