import { motion } from "framer-motion";

import MatchNode from "./MatchNode";

import type { BracketMatch } from "@/types";


interface Props {

    title:string;

    matches:BracketMatch[];

    onSelect:(id:number)=>void;

}



function RoundColumn({

    title,

    matches,

    onSelect

}:Props){


return (

<motion.div


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:.6

}}


className="

flex

flex-shrink-0

w-[120px]

sm:w-[135px]

md:w-[150px]

lg:w-[170px]

xl:w-[190px]

2xl:w-[210px]

flex-col

gap-6

"


>


<h2

className="

text-center

text-[9px]

sm:text-[10px]

md:text-xs

lg:text-sm

font-black

uppercase

tracking-[0.25em]

text-yellow-400

"

>

{title}

</h2>



<div

className="

flex

w-full

flex-col

gap-5

lg:gap-6

"

>


{

matches.map((item)=>(


<MatchNode

key={item.matchId}

matchId={item.matchId}

teamA={item.teamA}

teamB={item.teamB}

onClick={onSelect}

/>


))

}


</div>


</motion.div>


)

}


export default RoundColumn;
