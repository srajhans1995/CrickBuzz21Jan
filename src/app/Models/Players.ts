
import { Batting } from './Batting';
import { Bowling } from './Bowling';

export class Players {
    private name: string;
    private batting: Batting;
    private bowling: Bowling;
    constructor() {
        this.batting = new Batting();
        this.bowling = new Bowling();
    }
    setName(name: string) {
        this.name = name;
        console.log(this.name);
    }
    getName() {
        return this.name;
    }
    getBatting() {
        return this.batting;
    }
    getBowling() {
        return this.bowling;
    }
}