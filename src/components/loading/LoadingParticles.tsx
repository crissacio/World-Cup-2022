import { motion } from "framer-motion";


function LoadingParticles(){


    const particles = Array.from({
        length:70
    });


    return (

        <div
        className="
        absolute
        inset-0
        overflow-hidden
        "
        >

        {
            particles.map((_,index)=>(


                <motion.span

                key={index}


                className="
                absolute

                h-1.5
                w-1.5

                rounded-full

                bg-blue-200

                shadow-[0_0_15px_rgba(147,197,253,1)]

                "

                style={{

                    left:
                    `${Math.random()*100}%`,

                    top:
                    `${Math.random()*100}%`

                }}


                animate={{

                    y:[
                        0,
                        -80,
                        -180
                    ],

                    opacity:[
                        0,
                        1,
                        0
                    ],

                    scale:[
                        0.5,
                        1.5,
                        0
                    ]

                }}


                transition={{

                    duration:
                    4 + Math.random()*4,

                    repeat:Infinity,

                    delay:
                    Math.random()*4,

                    ease:"easeOut"

                }}

                />


            ))
        }


        </div>

    );

}


export default LoadingParticles;
