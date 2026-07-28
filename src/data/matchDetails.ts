import type { Match } from "@/types";



export const matchDetails: Match = {


    id: 3,


    teamA: "🇦🇷 Argentina",


    teamB: "🇫🇷 Francia",



    scoreA: 3,


    scoreB: 3,



    stage: "Final Mundial Qatar 2022",



    date: "18 Diciembre 2022",



    stadium: "Estadio Lusail",



    mvp: "Lionel Messi",





    goals: [


        {


            player: "Lionel Messi",


            minute: 23,


            team: "A",


            type: "penalty"


        },



        {


            player: "Ángel Di María",


            minute: 36,


            team: "A",


            type: "normal"


        },



        {


            player: "Kylian Mbappé",


            minute: 80,


            team: "B",


            type: "penalty"


        },



        {


            player: "Kylian Mbappé",


            minute: 81,


            team: "B",


            type: "normal"


        },



        {


            player: "Lionel Messi",


            minute: 108,


            team: "A",


            type: "normal"


        },



        {


            player: "Kylian Mbappé",


            minute: 118,


            team: "B",


            type: "penalty"


        }



    ],





    penalties: [



        {


            player: "Lionel Messi",


            scored: true


        },



        {


            player: "Paulo Dybala",


            scored: true


        },



        {


            player: "Leandro Paredes",


            scored: true


        },



        {


            player: "Gonzalo Montiel",


            scored: true


        },



        {


            player: "Kylian Mbappé",


            scored: true


        },



        {


            player: "Kingsley Coman",


            scored: false


        },



        {


            player: "Aurélien Tchouaméni",


            scored: false


        }



    ],





    stats: {


        possessionA: 54,


        possessionB: 46,


        shotsA: 10,


        shotsB: 7


    }



};
