import { motion } from "framer-motion";


interface Props {

    children: React.ReactNode;

}



function StadiumBackground({

    children

}:Props){



return (

<div

className="

relative

min-h-screen

overflow-hidden

bg-[#020617]

"


>



{/* CIELO */}


<div

className="

absolute

inset-0

bg-gradient-to-b

from-[#06142f]

via-[#020617]

to-black

"

/>





{/* LUZ CENTRAL COPA */}


<motion.div


animate={{

scale:[1,1.15,1],

opacity:[0.3,0.5,0.3]

}}



transition={{

duration:6,

repeat:Infinity

}}



className="

absolute

left-1/2

top-1/3

h-[700px]

w-[700px]

-translate-x-1/2

rounded-full

bg-yellow-400/20

blur-[150px]

"


/>





{/* LUCES LATERALES */}



<div

className="

absolute

left-0

top-0

h-full

w-1/3

bg-gradient-to-r

from-blue-500/20

to-transparent

blur-3xl

"

/>



<div

className="

absolute

right-0

top-0

h-full

w-1/3

bg-gradient-to-l

from-yellow-400/20

to-transparent

blur-3xl

"

/>





<div className="relative z-10">

{children}

</div>



</div>

)

}


export default StadiumBackground;
