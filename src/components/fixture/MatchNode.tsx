import { motion } from "framer-motion";


interface Props {


matchId:number;


teamA:string;


teamB:string;


onClick:(id:number)=>void;


}



function MatchNode({

matchId,

teamA,

teamB,

onClick

}:Props){


return (


<motion.button


whileHover={{

scale:1.05,

y:-5

}}



whileTap={{

scale:.97

}}



onClick={()=>onClick(matchId)}



className="

relative

w-full

overflow-hidden

rounded-3xl

border

border-white/10

bg-white/5

p-3

md:p3

lg:p-5

text-left

text-white

shadow-2xl

backdrop-blur-xl

"



>



<div

className="

absolute

inset-0

bg-gradient-to-br

from-white/10

to-transparent

"

/>



<div className="relative z-10 space-y-4">


<p className="font-black text-lg">

{teamA}

</p>



<div className="h-px bg-white/20"/>



<p className="font-black text-lg">

{teamB}

</p>


</div>



</motion.button>


)

}


export default MatchNode;
