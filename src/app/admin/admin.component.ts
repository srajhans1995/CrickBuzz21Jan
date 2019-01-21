import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatchService } from '../Services/match.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private matchService:MatchService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    switch(this.matchService.getMatchState())
    {
      case this.matchService.MATCH_NOT_STARTED:
      this.router.navigate(['newmatch'], { relativeTo: this.route });
      break;
      case this.matchService.MATCH_STATE_MATCH_DEFINED:
      
      this.router.navigate(['defineteams'], { relativeTo: this.route });
      break;
      case  this.matchService.MATCH_FIRST_INNING_STARTED:
      this.router.navigate(['updateinning'], { relativeTo: this.route });
      break;
      case this.matchService. MATCH_TEAMS_DEFINED:
      this.router.navigate(['updateinning'], { relativeTo: this.route });
      break;
      case this.matchService.MATCH_SECOND_INNING_STARTED:
      this.router.navigate(['updateinning'], { relativeTo: this.route });
      break;
      case this.matchService.MATCH_SECOND_INNING_END:
      this.router.navigate(['updateinning'], { relativeTo: this.route });
      break;
      
    }
  }
}