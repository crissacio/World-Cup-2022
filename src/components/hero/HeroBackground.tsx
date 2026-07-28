import { motion } from "framer-motion";


function HeroBackground(){

    return (

        <div
        className="
        absolute
        inset-0
        overflow-hidden
        bg-black
        "
        >


            {/* Cielo oscuro */}

            <div

            className="
            absolute
            inset-0

            bg-gradient-to-b

            from-[#020617]

            via-[#0f172a]

            to-[#000000]

            "

            />




            {/* Estructura superior del estadio */}

            <div

            className="

            absolute

            top-0

            left-1/2

            -translate-x-1/2


            h-[45vh]

            w-[120vw]


            rounded-b-[50%]


            border-b

            border-white/10


            bg-gradient-to-b

            from-white/5

            to-transparent


            "

            />





            {/* Anillo de luces */}

            <div

            className="

            absolute

            top-10

            left-1/2

            -translate-x-1/2


            h-32

            w-[80vw]


            rounded-full


            border

            border-yellow-300/20


            blur-sm

            "

            />





            {/* Campo lejano */}

            <motion.div


            className="

            absolute

            bottom-0

            left-1/2

            -translate-x-1/2


            h-[35vh]

            w-[120vw]


            rounded-t-[50%]


            bg-gradient-to-t

            from-green-950/40

            to-transparent


            "

            animate={{

                opacity:[

                    .5,

                    .8,

                    .5

                ]

            }}

            transition={{

                duration:5,

                repeat:Infinity

            }}


            />



        </div>

    )

}


export default HeroBackground;
