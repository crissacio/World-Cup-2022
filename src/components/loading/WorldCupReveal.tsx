import GoldenFlash from "./GoldenFlash";
import CurtainReveal from "./CurtainReveal";

import TrophyScene from "@/components/trophy/TrophyScene";


import type { LoadingPhase } from "@/hooks/useLoading";



interface Props{

    phase:LoadingPhase;

}



function WorldCupReveal({
    phase
}:Props){



    return (

        <>


        <GoldenFlash

        active={
            phase === "flash"
        }

        />



        <CurtainReveal

        open={

            phase === "opening"

            ||

            phase === "trophy"

            ||

            phase === "complete"

        }

        />



        <TrophyScene

        visible={

            phase === "trophy"

            ||

            phase === "complete"

        }

        />



        </>

    );

}


export default WorldCupReveal;
