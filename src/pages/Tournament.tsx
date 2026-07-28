import TournamentHeader 
from "@/components/fixture/TournamentHeader";


import StageTabs
from "@/components/fixture/StageTabs";

import Bracket 
from "@/components/fixture/Bracket";


function Tournament(){


    return (

        <main

        className="

        relative

        min-h-screen

        overflow-hidden


        bg-gradient-to-b

        from-[#020617]

        via-black

        to-black


        text-white

        "

        >




            {/* Glow fondo */}

            <div

            className="

            absolute

            top-0

            left-1/2

            -translate-x-1/2


            h-[500px]

            w-[500px]


            rounded-full


            bg-yellow-400/10


            blur-[120px]

            "

            />






            <TournamentHeader />



            <StageTabs />

            <Bracket />


        </main>

    );

}


export default Tournament;
