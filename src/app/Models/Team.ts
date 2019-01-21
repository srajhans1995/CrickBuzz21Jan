import { Players } from './Players';

export class Team {
   private player: Array<Players> = [];
   
    constructor() {
         this.player=[];
        for (let index = 0; index < 11; index++) {
            const player = new Players();
            this.player.push(player);
          
        }
    }
    /**
     * @description team completed when player length equal to 11
     * 
     */
    isTeamComplete(): boolean {
        if (this.player.length === 11) {
            return true;
        }
        return false;
    }

    getPlayer() {
        return this.player;
    }
   
}