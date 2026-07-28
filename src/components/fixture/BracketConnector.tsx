import { motion } from "framer-motion";


interface Props {

    height?: string;

}



function BracketConnector({

    height = "120px"

}: Props) {


    return (

        <motion.div


            initial={{

                scaleX:0,

                opacity:0

            }}



            animate={{

                scaleX:1,

                opacity:1

            }}



            transition={{

                duration:.8

            }}



            style={{

                height

            }}



            className="

            relative

            flex-shrink-0

            w-4

            sm:w-5

            md:w-6

            lg:w-8

            xl:w-10

            origin-left

            "

        >


            <div

                className="

                absolute

                left-0

                top-1/2

                h-[2px]

                w-full

                bg-gradient-to-r

                from-yellow-400

                via-yellow-300

                to-transparent

                shadow-[0_0_10px_rgba(250,204,21,.8)]

                "

            />


        </motion.div>

    )

}


export default BracketConnector;
