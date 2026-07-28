import { motion } from "framer-motion";

import FlagCircle from "./FlagCircle";
import LoadingParticles from "./LoadingParticles";

import type { LoadingPhase } from "@/hooks/useLoading";


interface Props {

    phase: LoadingPhase;

}



function LoadingScreen({
    phase
}: Props){


    const isLeaving = phase !== "loading";



    return (

        <motion.section


        initial={{

            opacity:1,

            scale:1,

            filter:"blur(0px)"

        }}


        animate={


            isLeaving


            ?


            {

                opacity:0,

                scale:1.12,

                filter:"blur(18px)"

            }


            :


            {

                opacity:1,

                scale:1,

                filter:"blur(0px)"

            }


        }


        transition={{

            duration:1.2,

            ease:"easeInOut"

        }}


        className="
        fixed

        inset-0

        z-[100]

        flex

        items-center

        justify-center

        overflow-hidden

        bg-black

        "


        >



            {/* Partículas */}

            <LoadingParticles />




            {/* Luz ambiental */}

            <motion.div


            className="

            absolute

            h-[500px]

            w-[500px]

            rounded-full

            bg-blue-400/10

            blur-[120px]

            "


            animate={{


                scale:[

                    1,

                    1.15,

                    1

                ]


            }}


            transition={{


                duration:4,

                repeat:Infinity,

                ease:"easeInOut"


            }}


            />





            <div

            className="
            relative

            z-10

            flex

            flex-col

            items-center

            gap-10

            "

            >





                {/* Bandera circular */}


                <motion.div



                initial={{


                    opacity:0,

                    scale:.7,

                    filter:"blur(20px)"


                }}



                animate={{


                    opacity:1,

                    scale:1,

                    filter:"blur(0px)"


                }}



                transition={{


                    duration:1.2,

                    ease:"easeOut"


                }}


                >


                    <FlagCircle />


                </motion.div>






                {/* Texto */}



                <motion.div



                initial={{


                    opacity:0,

                    y:30,

                    filter:"blur(10px)"


                }}



                animate={{


                    opacity:1,

                    y:0,

                    filter:"blur(0px)"


                }}



                transition={{


                    delay:1.2,

                    duration:1


                }}



                className="

                text-center

                "


                >




                    <motion.h1


                    className="

                    text-4xl

                    font-black

                    tracking-[0.3em]

                    text-white

                    "



                    animate={{


                        textShadow:[


                            "0 0 0px rgba(255,255,255,0)",

                            "0 0 25px rgba(255,255,255,.5)",

                            "0 0 0px rgba(255,255,255,0)"


                        ]


                    }}



                    transition={{


                        duration:3,

                        repeat:Infinity


                    }}



                    >

                        ARGENTINA 2022


                    </motion.h1>





                    <p

                    className="

                    mt-4

                    text-sm

                    tracking-[0.5em]

                    text-white/50

                    "

                    >

                        WORLD CUP EXPERIENCE


                    </p>




                </motion.div>





            </div>



        </motion.section>

    );

}


export default LoadingScreen;
