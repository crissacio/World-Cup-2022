import { motion } from "framer-motion";


function Flag({
    side
}: {
    side: "left" | "right";
}) {


    return (

        <motion.div

            className={`
            absolute

            top-[35%]

            ${side === "left" ? "left-10" : "right-10"}

            z-20

            flex

            gap-3

            `}


            animate={{

                y: [
                    0,
                    -8,
                    0
                ]

            }}


            transition={{

                duration: 3,

                repeat: Infinity,

                ease: "easeInOut"

            }}

        >



            {/* Mástil */}

            <div

                className="
                h-80

                w-1.5

                rounded-full

                bg-gradient-to-b

                from-gray-200

                via-gray-500

                to-gray-900

                shadow-lg

                "

            />





            {/* Tela */}

            <motion.div


                className="

                relative

                h-44

                w-28

                overflow-hidden

                shadow-[0_0_40px_rgba(255,255,255,.2)]

                "



                animate={{

                    scaleX: [

                        1,

                        .94,

                        1

                    ]

                }}



                transition={{

                    duration: 2,

                    repeat: Infinity,

                    ease: "easeInOut"

                }}



            >



                {/* Bandera argentina */}

                <div

                    className="

                    absolute

                    inset-0

                    bg-gradient-to-b

                    from-[#74ACDF]

                    via-white

                    to-[#74ACDF]

                    "

                />





                {/* Sol */}

                <div

                    className="

                    absolute

                    left-1/2

                    top-1/2

                    -translate-x-1/2

                    -translate-y-1/2


                    h-7

                    w-7


                    rounded-full


                    bg-yellow-400


                    shadow-[0_0_20px_rgba(250,204,21,.8)]

                    "

                />



            </motion.div>



        </motion.div>

    );

}





function Flags(){


    return (

        <>

            <Flag side="left" />

            <Flag side="right" />

        </>

    );

}


export default Flags;
