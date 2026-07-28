import {motion} from "framer-motion";


import type {Goal} from "@/types";



interface Props {


    goals:Goal[];


}



function GoalTimeline({

    goals

}:Props){



    return (


        <div

        className="

        mt-10

        space-y-4

        "

        >


            {

                goals.map((goal,index)=>(


                    <motion.div


                    key={index}


                    initial={{

                        opacity:0,

                        x:-30

                    }}


                    animate={{

                        opacity:1,

                        x:0

                    }}


                    transition={{

                        delay:index*.1

                    }}



                    className="

                    flex

                    justify-between

                    rounded-xl

                    bg-white/5

                    px-5

                    py-4

                    "

                    >



                        <span>

                            ⚽ {goal.player}

                        </span>



                        <strong

                        className="

                        text-yellow-400

                        "

                        >

                            {goal.minute}'

                        </strong>



                    </motion.div>


                ))

            }


        </div>


    );

}


export default GoalTimeline;
