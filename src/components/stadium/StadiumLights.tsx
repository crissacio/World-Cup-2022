import { motion } from "framer-motion";


function StadiumLights(){


    return (

        <>


        <motion.div

        className="

        absolute

        top-0

        left-1/2

        h-[300px]

        w-[300px]

        -translate-x-1/2

        rounded-full

        bg-yellow-300/20

        blur-[100px]

        "

        animate={{

            scale:[

                1,

                1.4,

                1

            ]

        }}

        transition={{

            duration:3,

            repeat:Infinity

        }}

        />



        </>

    );

}


export default StadiumLights;
