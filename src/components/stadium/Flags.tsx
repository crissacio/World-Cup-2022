import { motion } from "framer-motion";


function Flag({
    side
}:{
    side:"left"|"right";
}){


return (

<motion.div


className={`

absolute


top-[28%]

sm:top-[30%]

md:top-[35%]


${

side==="left"

?

"left-1 sm:left-4 md:left-10"

:

"right-1 sm:right-4 md:right-10"

}



z-10


flex

gap-2


scale-75

sm:scale-90

md:scale-100


`}


animate={{

y:[0,-8,0]

}}

transition={{

duration:3,

repeat:Infinity,

ease:"easeInOut"

}}

>


{/* Mastil */}

<div

className="

h-52

sm:h-64

md:h-80


w-1


rounded-full


bg-gradient-to-b

from-white

via-gray-400

to-gray-900


shadow-lg

"

/>



{/* Tela */}

<motion.div


className="

relative

h-28

sm:h-36

md:h-44


w-20

sm:w-24

md:w-28


overflow-hidden


shadow-[0_0_35px_rgba(116,172,223,.6)]

rounded-sm

"



animate={{

scaleX:[1,.94,1]

}}


transition={{

duration:2,

repeat:Infinity

}}

>


<div

className="

absolute

inset-0

bg-[linear-gradient(to_bottom,#74ACDF_0%,#74ACDF_33%,white_33%,white_66%,#74ACDF_66%,#74ACDF_100%)]

"

/>



<div

className="

absolute

left-1/2

top-1/2

-translate-x-1/2

-translate-y-1/2


h-5

w-5

sm:h-6

sm:w-6


rounded-full


bg-yellow-400


shadow-[0_0_25px_rgba(250,204,21,.9)]

"

/>



</motion.div>


</motion.div>

)

}



function Flags(){

return (

<>

<Flag side="left"/>

<Flag side="right"/>

</>

)

}


export default Flags;
