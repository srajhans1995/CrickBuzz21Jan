import { Injectable } from '@angular/core';
import { Match } from '../Models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
 


  readonly MATCH_NOT_STARTED           = 0;
  readonly MATCH_STATE_MATCH_DEFINED   = 1;
  readonly MATCH_TEAMS_DEFINED         = 2;
  readonly MATCH_FIRST_INNING_STARTED  = 3;
  readonly MATCH_FIRST_INNING_END      = 4;
  readonly MATCH_SECOND_INNING_STARTED = 5;
  readonly MATCH_SECOND_INNING_END     = 6;
  readonly MATCH_FINISHED              = 7;
  
  private match: Match;
  private matchState: number;
 

  constructor() {
    this.match = new Match();
    this.matchState = this.MATCH_NOT_STARTED;
  }
  /**
   * @description getting match state
   * @returns number
   */
  getMatchState(): number {
    return this.matchState;
  }
  /**
   * @description setter for Match State
   */
  setMatchState() {
    this.matchState++;
  }
  /**
   * @description getter for Match
   */
  getMatch() {
    return this.match;
  }
 

}
