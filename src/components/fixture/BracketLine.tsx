import { motion } from "framer-motion";


interface Props {

    height?:string;

}



function BracketLine({

    height="120px"

}:Props){


    return (

        <motion.div


        initial={{

            scaleY:0

        }}



        animate={{

            scaleY:1

        }}



        transition={{

            duration:.8

        }}



        style={{

            height

        }}



        className="

        hidden

        lg:block

        w-px

        origin-top

        bg-gradient-to-b

        from-yellow-400

        via-yellow-400/40

        to-transparent

        "

        />

    );

}


export default BracketLine;
