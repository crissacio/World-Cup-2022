import { motion } from "framer-motion";


function FlagCircle(){

    return (

        <motion.div

        className="
        relative

        flex
        items-center
        justify-center

        h-64
        w-64

        sm:h-72
        sm:w-72

        rounded-full

        overflow-hidden

        border
        border-white/40

        shadow-[0_0_120px_rgba(116,172,223,0.55)]

        "

        animate={{

            rotate:360

        }}

        transition={{

            duration:20,

            repeat:Infinity,

            ease:"linear"

        }}

        >


            {/* Bandera argentina */}

            <motion.div

            className="

            absolute

            inset-0


            bg-[linear-gradient(to_bottom,#74ACDF_0%,#74ACDF_33%,white_33%,white_66%,#74ACDF_66%,#74ACDF_100%)]

            "

            animate={{

                scaleX:[

                    1,

                    1.05,

                    1

                ]

            }}

            transition={{

                duration:3,

                repeat:Infinity,

                ease:"easeInOut"

            }}

            />



            {/* Luz suave sobre la bandera */}

            <div

            className="

            absolute

            inset-0

            bg-gradient-to-br

            from-white/30

            via-transparent

            to-blue-900/20

            "

            />





            {/* Sol argentino */}

            <motion.div

            className="

            relative

            z-10

            h-14

            w-14

            sm:h-16

            sm:w-16

            rounded-full

            bg-yellow-300

            shadow-[0_0_60px_rgba(250,204,21,1)]

            "

            animate={{

                scale:[

                    1,

                    1.15,

                    1

                ],

                boxShadow:[

                    "0 0 40px rgba(250,204,21,.7)",

                    "0 0 80px rgba(250,204,21,1)",

                    "0 0 40px rgba(250,204,21,.7)"

                ]

            }}

            transition={{

                duration:2,

                repeat:Infinity,

                ease:"easeInOut"

            }}

            />





            {/* Reflejo de luz */}

            <motion.div

            className="

            absolute

            inset-0

            bg-gradient-to-r

            from-transparent

            via-white/35

            to-transparent

            "

            animate={{

                x:[

                    "-120%",

                    "120%"

                ]

            }}

            transition={{

                duration:3,

                repeat:Infinity,

                ease:"linear"

            }}

            />





            {/* Borde interior */}

            <div

            className="

            absolute

            inset-3

            rounded-full

            border

            border-white/30

            "

            />


        </motion.div>

    );

}


export default FlagCircle;
