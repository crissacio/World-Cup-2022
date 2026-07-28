export interface Goal {

    player: string;

    minute: number;

    team: "A" | "B";

    type?: "normal" | "penalty";

}



export interface Penalty {

    player: string;

    scored: boolean;

}



export interface MatchStats {

    possessionA: number;

    possessionB: number;

    shotsA: number;

    shotsB: number;

}



export interface Match {


    id: number;


    teamA: string;

    teamB: string;


    scoreA: number;

    scoreB: number;


    winner?: string;


    stage: string;


    date: string;


    stadium: string;


    mvp: string;


    goals: Goal[];


    penalties?: Penalty[];


    stats: MatchStats;

}



export interface BracketMatch {


    matchId:number;


    teamA:string;


    teamB:string;


}
