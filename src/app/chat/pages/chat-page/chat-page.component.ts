import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LikeMatchResponse} from '../../models/like-match-response.model';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: []
})
export class ChatPageComponent implements OnInit {

  likeMatches: LikeMatchResponse[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.likeMatches = this.route.snapshot.data.likeMatches;
  }
}
