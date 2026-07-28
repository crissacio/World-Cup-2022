import {
    useEffect,
    useState
} from "react";


export type LoadingPhase =

    | "loading"
    | "flash"
    | "opening"
    | "trophy"
    | "complete";



export function useLoading(){


    const [
        phase,
        setPhase
    ] = useState<LoadingPhase>("loading");



    useEffect(()=>{


        const flashTimer = setTimeout(()=>{


            setPhase("flash");


        },4500);




        const openingTimer = setTimeout(()=>{


            setPhase("opening");


        },5200);




        const trophyTimer = setTimeout(()=>{


            setPhase("trophy");


        },6500);




        const completeTimer = setTimeout(()=>{


            setPhase("complete");


        },12500);




        return ()=>{


            clearTimeout(flashTimer);

            clearTimeout(openingTimer);

            clearTimeout(trophyTimer);

            clearTimeout(completeTimer);


        }


    },[]);



    return {

        phase,

        loading:
        phase !== "complete"

    };


}
