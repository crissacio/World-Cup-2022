import { motion } from "framer-motion";

import HeroBackground from "./HeroBackground";
import EnterButton from "./EnterButton";

import StadiumLights from "@/components/stadium/StadiumLights";
import StadiumStructure from "@/components/stadium/StadiumStructure";
import Crowd from "@/components/stadium/Crowd";
import Flags from "@/components/stadium/Flags";
import Smoke from "@/components/stadium/Smoke";

import trophy from "@/assets/images/trophy/world-cup.png";



function WorldCupHero(){


    return (

        <main

        className="
        relative

        min-h-screen

        overflow-hidden

        flex

        items-center

        justify-center

        bg-black

        "

        >



            {/* Fondo */}

            <HeroBackground />



            {/* Estructura del estadio */}

            <StadiumStructure />



            {/* Luces */}

            <StadiumLights />



            {/* Ambiente */}

            <Smoke />

            <Flags />

            <Crowd />






            {/* Glow principal detrás de la copa */}

            <motion.div


            className="

            absolute

            left-1/2

            top-1/2

            -translate-x-1/2

            -translate-y-1/2


            h-[650px]

            w-[650px]


            rounded-full


            bg-yellow-300/20


            blur-[130px]


            z-10

            "



            animate={{


                scale:[

                    1,

                    1.15,

                    1

                ],


                opacity:[

                    .35,

                    .8,

                    .35

                ]


            }}



            transition={{


                duration:4,

                repeat:Infinity,

                ease:"easeInOut"


            }}



            />






            {/* Luz ambiental sobre la copa */}

            <motion.div


            className="

            absolute

            z-10


            h-[500px]


            w-[300px]


            rounded-full


            bg-yellow-200/10


            blur-[90px]


            "



            animate={{


                opacity:[

                    .3,

                    .7,

                    .3

                ]

            }}



            transition={{


                duration:3,

                repeat:Infinity,

                ease:"easeInOut"


            }}



            />








            {/* Copa del mundo */}

            <motion.img


            src={trophy}


            alt="World Cup Trophy"



            className="


            absolute


            z-20


            h-[75vh]


            max-w-[90vw]


            object-contain



            drop-shadow-[0_0_90px_rgba(250,204,21,.8)]



            "



            initial={{


                opacity:0,


                y:80,


                scale:.85


            }}




            animate={{



                opacity:1,


                y:[0,-15,0],


                scale:1



            }}




            transition={{



                opacity:{

                    duration:1

                },


                scale:{

                    duration:1.2,

                    ease:"easeOut"

                },


                y:{

                    duration:4,

                    repeat:Infinity,

                    ease:"easeInOut"

                }


            }}




            />








            {/* Texto y botón */}

            <motion.div


            className="


            absolute


            z-30


            bottom-16


            text-center


            px-6


            "



            initial={{


                opacity:0,


                y:50,


                filter:"blur(10px)"


            }}




            animate={{



                opacity:1,


                y:0,


                filter:"blur(0px)"


            }}




            transition={{



                delay:1,


                duration:1



            }}



            >





                <motion.h1


                className="


                text-5xl


                md:text-6xl


                font-black


                tracking-tight


                text-white


                drop-shadow-lg


                "



                animate={{



                    textShadow:[


                        "0 0 0px rgba(255,255,255,0)",


                        "0 0 25px rgba(255,255,255,.35)",


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


                md:text-base


                tracking-[0.5em]


                text-white/60


                "

                >

                    WORLD CUP EXPERIENCE


                </p>







                <EnterButton />





            </motion.div>






        </main>

    );

}


export default WorldCupHero;
