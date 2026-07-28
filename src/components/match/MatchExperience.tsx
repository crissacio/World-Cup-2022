import { motion } from "framer-motion";

import GoalTimeline from "./GoalTimeline";
import StatsCard from "./StatsCard";
import PenaltyShootout from "./PenaltyShootout";

import type { Match } from "@/types";



interface Props {

    match: Match;

    close: () => void;

}




function MatchExperience({

    match,

    close

}: Props) {



    return (


        <motion.div


            initial={{

                opacity: 0

            }}



            animate={{

                opacity: 1

            }}



            exit={{

                opacity: 0

            }}



            transition={{

                duration: 0.4

            }}



            className="

            fixed

            inset-0

            z-50

            overflow-y-auto

            bg-black/95

            backdrop-blur-xl

            p-6

            "


        >





            {/* BOTÓN CERRAR */}


            <button


                onClick={close}



                className="

                fixed

                right-8

                top-8

                z-50

                rounded-full

                border

                border-white/20

                bg-white/10

                px-6

                py-3

                text-sm

                font-bold

                text-white

                backdrop-blur-xl

                transition

                hover:bg-white/20

                "


            >

                Cerrar

            </button>







            <div


                className="

                mx-auto

                max-w-5xl

                pt-20

                text-white

                "


            >





                {/* ETAPA */}



                <motion.p


                    initial={{

                        opacity:0,

                        y:-20

                    }}



                    animate={{

                        opacity:1,

                        y:0

                    }}



                    className="

                    text-center

                    text-sm

                    uppercase

                    tracking-[0.5em]

                    text-yellow-400

                    "

                >

                    {match.stage}


                </motion.p>







                {/* MARCADOR */}



                <div


                    className="

                    mt-12

                    flex

                    flex-col

                    items-center

                    justify-center

                    gap-8

                    md:flex-row

                    "

                >




                    {/* EQUIPO A */}



                    <div

                        className="

                        text-center

                        "

                    >


                        <h2

                            className="

                            text-3xl

                            font-black

                            "

                        >

                            {match.teamA}


                        </h2>



                        <motion.p


                            initial={{

                                scale:0

                            }}



                            animate={{

                                scale:1

                            }}



                            transition={{

                                delay:.3

                            }}



                            className="

                            mt-4

                            text-7xl

                            font-black

                            text-yellow-400

                            "

                        >

                            {match.scoreA}


                        </motion.p>


                    </div>







                    <span


                        className="

                        text-5xl

                        font-black

                        text-white/40

                        "

                    >

                        -

                    </span>







                    {/* EQUIPO B */}



                    <div

                        className="

                        text-center

                        "

                    >


                        <h2

                            className="

                            text-3xl

                            font-black

                            "

                        >

                            {match.teamB}


                        </h2>



                        <motion.p


                            initial={{

                                scale:0

                            }}



                            animate={{

                                scale:1

                            }}



                            transition={{

                                delay:.3

                            }}



                            className="

                            mt-4

                            text-7xl

                            font-black

                            text-yellow-400

                            "

                        >

                            {match.scoreB}


                        </motion.p>


                    </div>



                </div>









                {/* INFORMACIÓN DEL PARTIDO */}



                <div


                    className="

                    mt-10

                    text-center

                    text-white/60

                    "

                >



                    <p>

                        {match.date}

                    </p>



                    <p>

                        {match.stadium}

                    </p>



                </div>









                {/* GOLES */}



                <section


                    className="

                    mt-16

                    "

                >



                    <h3

                        className="

                        text-2xl

                        font-black

                        "

                    >

                        ⚽ Goles


                    </h3>




                    <GoalTimeline


                        goals={match.goals}


                    />



                </section>









                {/* PENALES */}



                {

                    match.penalties && (


                        <PenaltyShootout


                            penalties={match.penalties}


                        />


                    )

                }









                {/* ESTADISTICAS */}



                <section


                    className="

                    mt-16

                    "

                >



                    <h3

                        className="

                        text-2xl

                        font-black

                        "

                    >

                        📊 Estadísticas


                    </h3>





                    <div


                        className="

                        mt-6

                        grid

                        gap-5

                        md:grid-cols-2

                        "

                    >



                        <StatsCard


                            title="Posesión"


                            valueA={`${match.stats.possessionA}%`}


                            valueB={`${match.stats.possessionB}%`}


                        />





                        <StatsCard


                            title="Tiros"


                            valueA={`${match.stats.shotsA}`}


                            valueB={`${match.stats.shotsB}`}


                        />



                    </div>



                </section>









                {/* MVP */}



                <motion.div


                    initial={{

                        opacity:0,

                        y:30

                    }}



                    animate={{

                        opacity:1,

                        y:0

                    }}



                    transition={{

                        delay:.5

                    }}



                    className="

                    mt-12

                    rounded-3xl

                    border

                    border-yellow-400/30

                    bg-yellow-400/10

                    p-8

                    text-center

                    "


                >



                    <p

                        className="

                        text-sm

                        uppercase

                        tracking-widest

                        text-white/60

                        "

                    >

                        Jugador del partido


                    </p>



                    <h3

                        className="

                        mt-3

                        text-4xl

                        font-black

                        text-yellow-400

                        "

                    >

                        🏆 {match.mvp}


                    </h3>



                </motion.div>





            </div>



        </motion.div>


    );

}



export default MatchExperience;
