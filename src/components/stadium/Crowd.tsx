import { motion } from "framer-motion";


function Crowd(){


    const people = Array.from({
        length: 70
    });



    return (

        <motion.div


            className="

            absolute

            bottom-0

            left-0

            right-0


            h-[240px]


            z-10


            "

            initial={{

                opacity:0,

                y:40

            }}


            animate={{

                opacity:1,

                y:0

            }}


            transition={{

                duration:1.5

            }}

        >



            {/* Oscuridad de tribuna */}

            <div

                className="

                absolute

                inset-0

                bg-gradient-to-t

                from-black

                via-black/90

                to-transparent

                "

            />





            {/* Personas */}

            <div

                className="

                absolute

                bottom-0

                left-0

                right-0


                flex

                items-end

                justify-around

                px-5

                "

            >


                {
                    people.map((_, index)=>(


                        <motion.div


                            key={index}


                            className="

                            relative

                            h-16

                            w-6

                            rounded-full


                            bg-gradient-to-b

                            from-gray-800

                            to-black


                            shadow-lg


                            "

                            style={{

                                height:
                                `${40 + Math.random()*50}px`

                            }}



                            animate={{


                                y:[

                                    0,

                                    -5,

                                    0

                                ]

                            }}


                            transition={{

                                duration:
                                1.5 + Math.random(),

                                repeat:Infinity,

                                delay:
                                Math.random()*2,

                                ease:"easeInOut"

                            }}


                        >

                            {/* cabeza */}

                            <div

                                className="

                                absolute

                                -top-3

                                left-1/2

                                -translate-x-1/2


                                h-5

                                w-5


                                rounded-full


                                bg-gray-900


                                "

                            />


                        </motion.div>


                    ))

                }



            </div>



            {/* Luz de tribuna */}

            <motion.div


                className="

                absolute

                bottom-20

                left-0

                right-0


                h-20


                bg-blue-400/5


                blur-3xl

                "

                animate={{


                    opacity:[

                        .3,

                        .7,

                        .3

                    ]

                }}


                transition={{

                    duration:4,

                    repeat:Infinity

                }}


            />



        </motion.div>

    );

}


export default Crowd;
