import { motion } from "framer-motion";


function TrophyGlow(){


    return (

        <motion.div

        className="
        absolute

        h-[600px]

        w-[600px]

        rounded-full

        bg-yellow-300/20

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

            duration:3,

            repeat:Infinity

        }}

        />

    );

}


export default TrophyGlow;
