export class Batting {
    didNotBat: boolean;
    batiingNow: boolean;
    runs: number;
    facedballs: number;
    typeOfOut: string;
    out: boolean;
    constructor() {
        this.didNotBat = true;
        this.batiingNow = false;
        this.runs = 0;
        this.facedballs = 0;
        this.typeOfOut = "NotOut";
        this.out = false;
    }
    setRunsForPlayer(runs: number) {
        this.runs = runs;
    }
    getRunsForPlayer() {
        return this.runs;
    }
    setBallFacedByPlayer(ballFaced: number) {
        this.facedballs = ballFaced;
    }
    getBallFacedByPlayer() {
        return this.facedballs;
    }
    getTypeOfOut(typeOfOut: string) {
        this.typeOfOut = typeOfOut;
    }
}