import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Codesnippet} from '../../models/codesnippet.model';

@Component({
  selector: 'app-codesnippet-overview',
  templateUrl: './codesnippet-overview.component.html',
  styleUrls: ['./codesnippet-overview.component.scss']
})
export class CodesnippetOverviewComponent implements OnInit {

  codesnippets: Codesnippet[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.codesnippets = this.route.snapshot.data.Codesnippets;
  }



}
