import { Component, OnInit } from '@angular/core';
import { MatchService } from '../Services/match.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  public previosInningScore = false;

  constructor(public matchService: MatchService) {
    if (matchService.getMatchState() == matchService.MATCH_SECOND_INNING_STARTED) {
      this.previosInningScore = true;
      console.log(matchService.getMatch().getFirstInningRuns());
      console.log(matchService.getMatch().getFirstInningWicket());
    }
  }

  ngOnInit() {
  }

}
