import { motion } from "framer-motion";


function Smoke(){


    return (

        <motion.div


        className="

        absolute

        bottom-20

        left-1/2

        -translate-x-1/2


        h-40

        w-[700px]


        rounded-full


        bg-white/10


        blur-[80px]


        z-10

        "


        animate={{

            x:[

                "-20px",

                "20px",

                "-20px"

            ],

            opacity:[

                .2,

                .5,

                .2

            ]

        }}


        transition={{

            duration:6,

            repeat:Infinity

        }}

        />

    );

}


export default Smoke;
