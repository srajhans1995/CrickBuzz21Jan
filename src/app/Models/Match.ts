import { Team } from './Team';
import { Commentry } from './Commentry';


export class Match {
    readonly decision_batting = 1;
    readonly decision_bowling = 2;


    private team1name: string;
    private team2name: string;
    private tossWinBy: string;
    private decision: number;
    private battingTeamName: string;
    private bowlingTeamName: string;
    private oversForMatch: number;
    private team1: Team;
    private team2: Team;
    private commentry: Array<Commentry> = [];
    private currentBall: number = 0;
    private currentOver: number = 0;
    private totalRuns: number = 0;
    private totalWickets: number = 0;

    private firstInningScore: number;
    private firstInningWicket: number;
    constructor() {

    }

    setTeamname(teamName1: string, teamName2: string) {
        this.team1name = teamName1;
        this.team2name = teamName2;
        this.team1 = new Team();
        this.team2 = new Team();
    }

    setTossWiningTeam(teamName: string, decision: number): boolean {
        this.tossWinBy = teamName;
        this.decision = decision;
        return true;
    }

    setOversForMatch(overs: number) {
        this.oversForMatch = overs;
    }

    setCommentry(currentBall, currentOver, currentBowler, strikeBatsman, runsOnCurrentBall, description, nonStrikeBatsman) {
        this.commentry.push(new Commentry(currentBall, currentOver, currentBowler, strikeBatsman, runsOnCurrentBall, description, nonStrikeBatsman));
    }

    getCommentry() {
        return this.commentry;
    }

    getTeamName1() {
        return this.team1name;
    }

    getTeamName2() {
        return this.team2name;
    }

    setTeams(team1: Team, team2: Team) {
        this.team1 = team1;
        this.team2 = team2;
    }

    getTeam1() {
        return this.team1;
    }

    getTeam2() {
        return this.team2;
    }

    getTossWinBy() {
        return this.tossWinBy;
    }

    getDecision() {
        return this.decision;
    }

    getOversForTheMatch() {
        return this.oversForMatch;
    }

    getBattingTeam() {
        if (this.tossWinBy == this.team1name && this.decision == this.decision_batting) {
            this.battingTeamName = this.team1name;
            return this.team1;
        }
        else {
            this.battingTeamName = this.team2name;
            return this.team2;
        }
    }

    /**
     * @description  if tosswinby team1name and choose bowling then bowling team name is team1name else bowlling team name is team2name
     * @param  
     */
    getBowlingTeam() {
        if (this.tossWinBy == this.team1name && this.decision == this.decision_bowling) {
            this.bowlingTeamName = this.team1name;
            return this.team1;
        }
        else {
            this.bowlingTeamName = this.team2name;
            return this.team2;
        }
    }
    /**
     * @description if currentBall equal to 7 then current ball state 1 and currentOver increment by 1 
     * @param  
     */
    setCurrentBall() {
        this.currentBall++;
        if (this.currentBall >= 7) {
            this.currentBall = 1;
            this.currentOver++;
        }
    }

    getCurrentBall() {
        return this.currentBall;
    }

    getCurrentOver() {
        return this.currentOver;
    }

    setTotalRuns(totalRuns: number) {
        this.totalRuns = this.totalRuns + (totalRuns);
        console.log(this.totalRuns);
    }

    getTotalRuns(): number {
        return this.totalRuns;
    }

    setTotalWickets() {
        this.totalWickets = this.totalWickets + 1;
        console.log(this.totalWickets);
    }

    getTotalWickets() {
        return this.totalWickets;
    }

    getFirstInningRuns() {
        return this.firstInningScore;
    }

    getFirstInningWicket() {
        return this.firstInningWicket;
    }

    /**
     * @description this function created for Know the FirstInning End 
     */
    firstinningEnd() {
        this.currentBall = 0;
        this.currentOver = 0;
    }

    /**
     * @description Function creates for changing Inning
     */
    inningChanged() {
        this.firstInningScore = this.totalRuns;
        this.firstInningWicket = this.totalWickets;
        this.totalRuns = 0;
        this.totalWickets = 0;
    }

    getBattingTeamName() {
        return this.battingTeamName;
    }

    getBowlingTeamName() {
        return this.bowlingTeamName;
    }
}