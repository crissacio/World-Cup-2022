import { motion } from "framer-motion";

import trophy from "@/assets/images/trophy/world-cup.png";

import TrophyGlow from "./TrophyGlow";


interface Props{

    visible:boolean;

}



function TrophyScene({
    visible
}:Props){


    return (

        <motion.section

        className="
        fixed
        inset-0

        z-50

        flex
        items-center
        justify-center

        perspective-[1200px]

        "

        initial={{

            opacity:0

        }}

        animate={

            visible

            ?

            {

                opacity:1

            }

            :

            {

                opacity:0

            }

        }

        transition={{

            duration:1

        }}

        >


            <TrophyGlow />



            <motion.img


            src={trophy}


            alt="World Cup Trophy"


            className="

            relative

            z-10

            h-[90vh]

            object-contain


            drop-shadow-[0_0_90px_rgba(250,204,21,.8)]

            "



            initial={{

                opacity:0,

                y:250,

                scale:.45,

                rotateX:25

            }}



            animate={

                visible

                ?

                {

                    opacity:1,

                    y:0,

                    scale:1,

                    rotateX:0

                }

                :

                {}

            }



            transition={{

                duration:2,

                ease:[

                    0.16,

                    1,

                    0.3,

                    1

                ]

            }}



            />


        </motion.section>

    );

}


export default TrophyScene;
