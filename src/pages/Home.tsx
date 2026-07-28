import { motion } from "framer-motion";

import LoadingScreen from "@/components/loading/LoadingScreen";
import WorldCupReveal from "@/components/loading/WorldCupReveal";
import WorldCupHero from "@/components/hero/WorldCupHero";

import { useLoading } from "@/hooks/useLoading";



function Home(){


    const {

        phase,

        loading

    } = useLoading();



    const showHero = phase === "complete";



    return (

        <main

        className="
        relative

        min-h-screen

        overflow-hidden

        bg-black

        "

        >



            {
                loading

                &&

                <LoadingScreen

                phase={phase}

                />

            }




            {
                phase !== "complete"

                &&

                <WorldCupReveal

                phase={phase}

                />

            }





            {
                showHero

                &&

                <motion.div

                initial={{

                    opacity:0,

                    scale:1.05,

                    filter:"blur(20px)"

                }}

                animate={{

                    opacity:1,

                    scale:1,

                    filter:"blur(0px)"

                }}

                transition={{

                    duration:1.5

                }}

                >

                    <WorldCupHero />


                </motion.div>

            }



        </main>

    );

}


export default Home;
