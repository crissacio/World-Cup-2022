import type { Match } from "@/types";



export const matches: Match[] = [



    {


        id: 1,


        teamA: "🇦🇷 Argentina",


        teamB: "🇦🇺 Australia",


        scoreA: 2,


        scoreB: 1,


        stage: "Octavos de final",


        date: "3 Diciembre 2022",


        stadium: "Ahmad Bin Ali Stadium",


        mvp: "Lionel Messi",



        goals: [

            {

                player: "Lionel Messi",

                minute: 35,

                team: "A"

            },


            {

                player: "Julián Álvarez",

                minute: 57,

                team: "A"

            }

        ],



        stats: {

            possessionA: 57,

            possessionB: 43,

            shotsA: 14,

            shotsB: 5

        }


    },





    {


        id: 2,


        teamA: "🇦🇷 Argentina",


        teamB: "🇳🇱 Países Bajos",


        scoreA: 2,


        scoreB: 2,


        stage: "Cuartos de final",


        date: "9 Diciembre 2022",


        stadium: "Lusail Stadium",


        mvp: "Emiliano Martínez",



        goals: [


            {

                player: "Nahuel Molina",

                minute: 35,

                team: "A"

            },


            {

                player: "Lionel Messi",

                minute: 73,

                team: "A"

            },


            {

                player: "Wout Weghorst",

                minute: 83,

                team: "B"

            },


            {

                player: "Wout Weghorst",

                minute: 101,

                team: "B"

            }


        ],



        penalties: [

            {

                player: "Virgil van Dijk",

                scored: false

            },


            {

                player: "Steven Berghuis",

                scored: false

            },


            {

                player: "Lionel Messi",

                scored: true

            },


            {

                player: "Leandro Paredes",

                scored: true

            }

        ],



        stats: {


            possessionA: 48,

            possessionB: 52,

            shotsA: 8,

            shotsB: 9


        }


    },







    {


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

                team: "A"

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

                team: "B"

            },


            {

                player: "Lionel Messi",

                minute: 108,

                team: "A"

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


    }


];
