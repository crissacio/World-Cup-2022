import { motion } from "framer-motion";

import {
    useNavigate
} from "react-router-dom";



function EnterButton(){


    const navigate = useNavigate();



    return (

        <motion.button


        onClick={()=>navigate("/mundial")}



        whileHover={{

            scale:1.06

        }}


        whileTap={{

            scale:.95

        }}



        className="

        mt-10

        rounded-full

        bg-yellow-400


        px-14

        py-5


        text-sm

        font-black


        tracking-[0.25em]


        text-black


        shadow-[0_0_50px_rgba(250,204,21,.5)]

        "

        >


            EXPLORAR MUNDIAL


        </motion.button>

    );

}


export default EnterButton;
