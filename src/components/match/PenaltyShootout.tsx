import {motion} from "framer-motion";


import type {Penalty} from "@/types";



interface Props {

    penalties:Penalty[];

}



function PenaltyShootout({

    penalties

}:Props){


    return (

        <div className="mt-10">


            <h3 className="text-2xl font-black">

                Definición por penales

            </h3>



            <div className="mt-5 space-y-3">


            {
                penalties.map((penalty,index)=>(


                    <motion.div

                    key={index}


                    initial={{

                        opacity:0,

                        x:-20

                    }}


                    animate={{

                        opacity:1,

                        x:0

                    }}


                    className="

                    flex

                    justify-between

                    rounded-xl

                    bg-white/5

                    p-4

                    "


                    >

                        <span>

                        {penalty.player}

                        </span>


                        <span>

                        {

                        penalty.scored

                        ?

                        "⚽"

                        :

                        "❌"

                        }

                        </span>


                    </motion.div>


                ))
            }


            </div>


        </div>

    );

}


export default PenaltyShootout;
