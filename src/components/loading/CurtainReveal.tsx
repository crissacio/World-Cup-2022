import { motion } from "framer-motion";


interface Props{

    open:boolean;

}



function CurtainReveal({
    open
}:Props){


    return (

        <>


        <motion.div

        className="
        fixed

        top-0
        left-0

        h-screen
        w-1/2

        z-[70]

        bg-gradient-to-r

        from-[#74ACDF]

        via-white

        to-[#74ACDF]

        "

        animate={

            open

            ?

            {
                x:"-100%"
            }

            :

            {
                x:"0"
            }

        }

        transition={{

            duration:1.6,

            ease:[0.76,0,0.24,1]

        }}

        />



        <motion.div

        className="
        fixed

        top-0
        right-0

        h-screen
        w-1/2

        z-[70]

        bg-gradient-to-l

        from-[#74ACDF]

        via-white

        to-[#74ACDF]

        "

        animate={

            open

            ?

            {
                x:"100%"
            }

            :

            {
                x:"0"
            }

        }

        transition={{

            duration:1.6,

            ease:[0.76,0,0.24,1]

        }}

        />



        </>

    );

}


export default CurtainReveal;
