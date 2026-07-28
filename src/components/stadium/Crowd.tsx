import { motion } from "framer-motion";


function Crowd(){


    const people = Array.from({
        length:30
    });



    return (

        <motion.div

            className="

            absolute

            bottom-0

            left-0

            right-0


            h-[130px]

            sm:h-[180px]

            md:h-[240px]


            z-0

            overflow-hidden

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



            {/* sombra tribuna */}

            <div

                className="

                absolute

                inset-0

                bg-gradient-to-t

                from-black

                via-[#06152e]/90

                to-transparent

                "

            />



            {/* luces azul estadio */}

            <div

                className="

                absolute

                inset-x-0

                bottom-0

                h-24

                bg-gradient-to-t

                from-blue-500/20

                to-transparent

                blur-2xl

                "

            />



            <div

                className="

                absolute

                bottom-0

                left-0

                right-0

                flex

                items-end

                justify-around

                px-2

                "

            >

            {
                people.map((_,index)=>(


                    <motion.div


                        key={index}


                        className={`

                        relative

                        w-4

                        sm:w-5

                        rounded-full

                        shadow-lg

                        ${

                        index % 3 === 0

                        ? "bg-gradient-to-b from-[#74ACDF] to-black"

                        : index % 3 === 1

                        ? "bg-gradient-to-b from-white to-black"

                        : "bg-gradient-to-b from-gray-700 to-black"

                        }

                        `}


                        style={{

                            height:`${35 + Math.random()*45}px`

                        }}



                        animate={{

                            y:[0,-5,0]

                        }}



                        transition={{

                            duration:1.5 + Math.random(),

                            repeat:Infinity,

                            delay:Math.random()*2

                        }}

                    >



                    <div

                    className="

                    absolute

                    -top-3

                    left-1/2

                    -translate-x-1/2

                    h-4

                    w-4

                    rounded-full

                    bg-[#111827]

                    "

                    />



                    </motion.div>


                ))

            }

            </div>



        </motion.div>

    );

}


export default Crowd;
