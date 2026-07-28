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

        rounded-full

        overflow-hidden

        border
        border-white/30

        shadow-[0_0_100px_rgba(116,172,223,0.45)]

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

            bg-gradient-to-b

            from-[#74ACDF]

            via-white

            to-[#74ACDF]

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



            {/* Sol argentino */}

            <motion.div

            className="
            absolute

            h-14

            w-14

            rounded-full

            bg-yellow-300

            shadow-[0_0_50px_rgba(250,204,21,.9)]

            "

            animate={{

                scale:[

                    1,

                    1.15,

                    1

                ]

            }}

            transition={{

                duration:2,

                repeat:Infinity

            }}

            />



            {/* Reflejo de luz */}

            <motion.div

            className="
            absolute

            inset-0

            bg-gradient-to-r

            from-transparent

            via-white/40

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

            border-white/20

            "

            />


        </motion.div>

    );

}


export default FlagCircle;
