import { motion } from "framer-motion";


function ChampionCard() {


    return (


        <motion.div


            initial={{

                opacity:0,

                scale:.6

            }}



            animate={{

                opacity:1,

                scale:1

            }}



            transition={{

                delay:1,

                duration:.6

            }}



            className="

            relative

            flex

            flex-shrink-0

            w-[220px]

            sm:w-[250px]

            md:w-[280px]

            lg:w-[300px]

            flex-col

            items-center

            justify-center

            overflow-hidden

            rounded-[2rem]

            border

            border-yellow-400/40

            bg-gradient-to-b

            from-yellow-400/20

            via-yellow-500/10

            to-black

            px-6

            py-10

            text-center

            text-white

            shadow-[0_0_80px_rgba(250,204,21,.25)]

            "

        >



            <div

                className="

                absolute

                inset-0

                bg-[radial-gradient(circle,rgba(250,204,21,.18),transparent_70%)]

                "

            />





            <motion.div


                animate={{

                    rotate:360

                }}



                transition={{

                    duration:15,

                    repeat:Infinity,

                    ease:"linear"

                }}



                className="

                relative

                z-10

                text-6xl

                "

            >

                🏆


            </motion.div>





            <h2

                className="

                relative

                z-10

                mt-6

                text-xl

                md:text-2xl

                lg:text-3xl

                font-black

                tracking-[0.12em]

                "

            >

                ARGENTINA


            </h2>





            <p

                className="

                relative

                z-10

                mt-3

                text-xs

                md:text-sm

                font-bold

                tracking-[0.2em]

                text-yellow-300

                "

            >

                CAMPEÓN DEL MUNDO


            </p>





            <p

                className="

                relative

                z-10

                mt-2

                text-sm

                text-white/70

                "

            >

                Qatar 2022


            </p>




        </motion.div>


    )

}


export default ChampionCard;
