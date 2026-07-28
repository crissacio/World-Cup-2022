import { motion } from "framer-motion";


interface Props {

    active:boolean;

}



function GoldenFlash({
    active
}:Props){


    return (

        <motion.div

        className="
        fixed
        inset-0

        z-[80]

        pointer-events-none

        bg-yellow-300

        "

        initial={{
            opacity:0
        }}

        animate={

            active

            ?

            {
                opacity:[
                    0,
                    .9,
                    0
                ]
            }

            :

            {
                opacity:0
            }

        }


        transition={{

            duration:1

        }}

        />

    );

}


export default GoldenFlash;
