import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/Services/match.service';



@Component({
  selector: 'app-update-innings',
  templateUrl: './update-innings.component.html'
})
export class UpdateInningsComponent implements OnInit {

  @ViewChild('possibleRun') possiblerunInTS: ElementRef;

  currentBall: number = 0;
  currentOver: number = 0;
  totalRuns: number;
  currentWickets: number;
  strikeBatsman: string;
  currentBowler: string;
  runsOnCurrentBall: number;
  description: string;
  nonStrikeBatsman: string;
  possibleRunsOrWicket;
  battingPlayers;
  fieldingPlayers;

  public showTypeOfWicket = false;
  public showCatchBy = false;
  public showBowler = false;
  public showStrikeBatsman = false;
  public showNonStrikeBatsman = false;

  constructor(public matchService: MatchService) {

    this.battingPlayers = matchService.getMatch().getBattingTeam().getPlayer();
    this.fieldingPlayers = matchService.getMatch().getBowlingTeam().getPlayer();
    if (matchService.getMatch().getCurrentBall() == 0 && matchService.getMatch().getCurrentOver() == 0) {
      this.showNonStrikeBatsman = true;
      this.showStrikeBatsman = true;
      this.showBowler = true;
    }
  }

  ngOnInit() {

  }

  onChangeOfPossibleRun(event) {
    const element: HTMLInputElement = event.target;
    if (element.value == 'Wicket') {
      this.showTypeOfWicket = true;
    }
    else {
      this.showTypeOfWicket = false;
    }
  }

  forCatchBy(event) {
    const element: HTMLInputElement = event.target;
    if (element.value == 'Catch') {
      this.showCatchBy = true;
    }
    else {
      this.showCatchBy = false;
    }
  }
  /**
   * @description These fuction use for Setting and getting Current Ball and Over status for Innings
   *
   */
  onAddScore() {
    this.matchService.getMatch().setCurrentBall();
    this.currentBall = this.matchService.getMatch().getCurrentBall();
    this.currentOver = this.matchService.getMatch().getCurrentOver();
    this.showCatchBy = false;
    this.showTypeOfWicket = false;
    if (this.currentBall == 6) {
      this.showBowler = true;
    }
    else {
      this.showBowler = false;
    }


    if (this.matchService.getMatchState() == 2) {
      this.matchService.setMatchState();

    }

    if (this.matchService.getMatchState() == 4) {
      this.matchService.getMatch().inningChanged();

      this.matchService.setMatchState();
    }

    this.possibleRunsOrWicket = ((<HTMLInputElement>this.possiblerunInTS.nativeElement).value);
    if (this.possibleRunsOrWicket == "1" || this.possibleRunsOrWicket == "2" || this.possibleRunsOrWicket == "3" ||
      this.possibleRunsOrWicket == "4" || this.possibleRunsOrWicket == "6") {

      this.totalRuns = +this.possibleRunsOrWicket;
      this.matchService.getMatch().setTotalRuns(this.totalRuns);
    }
    else if (this.possibleRunsOrWicket == "Wicket") {
      this.matchService.getMatch().setTotalWickets();

    }

    if (this.possibleRunsOrWicket == "Wicket") {
      this.showNonStrikeBatsman = true;
      this.showStrikeBatsman = true;
    }
    else {
      this.showNonStrikeBatsman = false;
      this.showStrikeBatsman = false;
    }


    this.matchService.getMatch().setCommentry(this.currentBall, this.currentOver, this.currentBowler, this.strikeBatsman, this.runsOnCurrentBall, this.description, this.nonStrikeBatsman);

    if (this.matchService.getMatch().getCurrentOver() >= this.matchService.getMatch().getOversForTheMatch() - 1 && this.currentBall == 6) {
      this.matchService.getMatch().firstinningEnd();
      this.matchService.setMatchState();
      this.showStrikeBatsman = true;
      this.showNonStrikeBatsman = true;

      if (this.matchService.getMatch().getBattingTeam() == this.matchService.getMatch().getTeam1()) {
        this.battingPlayers = this.matchService.getMatch().getTeam2().getPlayer();
      }
      else {
        this.battingPlayers = this.matchService.getMatch().getTeam1().getPlayer();
      }
      if (this.matchService.getMatch().getBowlingTeam() == this.matchService.getMatch().getTeam1()) {
        this.fieldingPlayers = this.matchService.getMatch().getTeam2().getPlayer();
      }
      else {
        this.fieldingPlayers = this.matchService.getMatch().getTeam1().getPlayer();
      }
    }


  }
}
