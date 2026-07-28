import { motion } from "framer-motion";


interface Props {

    open:boolean;

    close:()=>void;

}



function MatchModal({

    open,

    close

}:Props){


    if(!open)

        return null;



    return (

        <motion.div


        initial={{

            opacity:0

        }}


        animate={{

            opacity:1

        }}



        onClick={close}


        className="

        fixed

        inset-0

        z-50

        flex

        items-center

        justify-center


        bg-black/80

        backdrop-blur-md

        "



        >



            <motion.div


            initial={{

                scale:.8,

                y:50

            }}



            animate={{

                scale:1,

                y:0

            }}



            onClick={e=>e.stopPropagation()}



            className="

            w-[90%]

            max-w-xl


            rounded-3xl


            border

            border-white/10


            bg-zinc-950


            p-10


            text-white


            "

            >



                <h2

                className="

                text-3xl

                font-black

                "

                >

                    🇦🇷 Argentina 3 - 3 Francia 🇫🇷

                </h2>




                <div

                className="

                mt-8

                space-y-4

                text-white/70

                "

                >


                    <p>

                    ⚽ Messi 23'

                    </p>


                    <p>

                    ⚽ Di María 36'

                    </p>


                    <p>

                    ⚽ Mbappé 80'

                    </p>


                    <p>

                    ⚽ Mbappé 118'

                    </p>


                </div>




            </motion.div>


        </motion.div>

    );

}


export default MatchModal;
