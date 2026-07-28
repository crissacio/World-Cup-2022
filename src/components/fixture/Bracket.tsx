import {
    useState
} from "react";


import {
    bracket
} from "@/data/bracket";


import {
    matches
} from "@/data/matches";


import MatchExperience from "../match/MatchExperience";


import RoundColumn from "./RoundColumn";


import ChampionCard from "./ChampionCard";


import BracketConnector from "./BracketConnector";





function Bracket() {


    const [

        selectedMatch,

        setSelectedMatch

    ] = useState<number | null>(null);





    const currentMatch = matches.find(

        match => match.id === selectedMatch

    );





    return (


        <section


            className="

            relative

            min-h-screen

            overflow-x-auto

            overflow-y-hidden

            bg-black

            px-4

            py-24

            "

        >



            <div


                className="

                pointer-events-none

                absolute

                inset-0

                bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_40%)]

                "

            />







            <div

                className="

                flex

                w-max

                items-center

                justify-start

                gap-2

                sm:gap-3

                md:gap-4

                lg:gap-5

                xl:gap-6

                px-2

                "

            >





                <RoundColumn

                    title="Octavos"

                    matches={bracket.round16}

                    onSelect={setSelectedMatch}

                />





                <BracketConnector />





                <RoundColumn

                    title="Cuartos"

                    matches={bracket.quarter}

                    onSelect={setSelectedMatch}

                />





                <BracketConnector />





                <RoundColumn

                    title="Semifinal"

                    matches={bracket.semi}

                    onSelect={setSelectedMatch}

                />





                <BracketConnector />





                <RoundColumn

                    title="Final"

                    matches={bracket.final}

                    onSelect={setSelectedMatch}

                />





                <BracketConnector />





                <ChampionCard />





            </div>







            {

                currentMatch && (



                    <MatchExperience


                        match={currentMatch}


                        close={() =>

                            setSelectedMatch(null)

                        }


                    />



                )



            }





        </section>


    );

}



export default Bracket;
