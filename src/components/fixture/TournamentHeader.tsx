import { motion } from "framer-motion";


function TournamentHeader(){


    return (

        <motion.header


        initial={{

            opacity:0,

            y:-40

        }}


        animate={{

            opacity:1,

            y:0

        }}


        transition={{

            duration:1

        }}



        className="

        relative

        pt-20

        text-center

        "

        >



            <p

            className="

            text-yellow-400

            uppercase

            tracking-[0.5em]

            text-sm

            "

            >

                FIFA EXPERIENCE

            </p>




            <h1

            className="

            mt-5

            text-5xl

            md:text-7xl

            font-black

            "

            >

                WORLD CUP

                <span

                className="

                block

                text-yellow-400

                "

                >

                    QATAR 2022

                </span>


            </h1>




            <p

            className="

            mt-6

            text-white/50

            "

            >

                Camino hacia la tercera estrella

            </p>




        </motion.header>

    );

}


export default TournamentHeader;
