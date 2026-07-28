interface Props{


    title:string;


    valueA:string;


    valueB:string;


}



function StatsCard({

    title,

    valueA,

    valueB

}:Props){


    return (

        <div

        className="

        rounded-2xl

        border

        border-white/10

        bg-white/5

        p-5

        text-center

        "

        >


            <p

            className="

            text-white/50

            text-sm

            "

            >

                {title}

            </p>



            <div

            className="

            mt-3

            flex

            justify-between

            font-bold

            "

            >


                <span>

                    {valueA}

                </span>


                <span>

                    {valueB}

                </span>


            </div>


        </div>

    )

}


export default StatsCard;
