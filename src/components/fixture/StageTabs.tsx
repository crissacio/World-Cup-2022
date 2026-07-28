import { motion } from "framer-motion";


const stages=[

    "Octavos",

    "Cuartos",

    "Semifinal",

    "Final"

];



function StageTabs(){


    return (

        <div

        className="

        mt-16

        flex

        flex-wrap

        justify-center

        gap-5

        "

        >


            {
                stages.map((stage,index)=>(


                    <motion.button


                    key={stage}


                    whileHover={{

                        scale:1.05

                    }}



                    className={`

                    rounded-full

                    px-8

                    py-3

                    text-sm

                    font-bold

                    uppercase

                    tracking-widest


                    ${

                    index===3

                    ?

                    "bg-yellow-400 text-black"

                    :

                    "bg-white/10 text-white"

                    }


                    `}



                    >


                        {stage}


                    </motion.button>


                ))
            }


        </div>

    );

}


export default StageTabs;
