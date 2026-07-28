import { motion } from "framer-motion";


function StadiumStructure(){


    return (

        <div

        className="
        absolute

        inset-0

        overflow-hidden

        pointer-events-none

        z-[5]

        "

        >



            {/* Anillo superior del estadio */}

            <motion.div


            className="

            absolute

            top-[5%]

            left-1/2

            -translate-x-1/2


            h-[420px]

            w-[110vw]


            rounded-[50%]


            border

            border-white/10


            bg-white/[0.02]


            "

            animate={{

                scaleX:[

                    1,

                    1.02,

                    1

                ]

            }}

            transition={{

                duration:8,

                repeat:Infinity

            }}

            />





            {/* Segundo anillo de luces */}

            <div

            className="

            absolute

            top-[8%]

            left-1/2

            -translate-x-1/2


            h-20

            w-[90vw]


            rounded-full


            border-t

            border-yellow-300/30


            blur-sm


            "

            />







            {/* Grada trasera */}

            <div

            className="

            absolute

            bottom-[180px]

            left-1/2

            -translate-x-1/2


            h-[180px]


            w-[100vw]


            rounded-t-[50%]


            bg-gradient-to-t

            from-black

            via-gray-950

            to-transparent


            opacity-80


            "

            />







            {/* Campo */}

            <motion.div


            className="

            absolute

            bottom-0

            left-1/2

            -translate-x-1/2


            h-[160px]

            w-[80vw]


            rounded-t-full


            bg-gradient-to-t

            from-green-900/40

            to-transparent


            "

            animate={{

                opacity:[

                    .4,

                    .7,

                    .4

                ]

            }}

            transition={{

                duration:5,

                repeat:Infinity

            }}

            />



        </div>

    );

}


export default StadiumStructure;
