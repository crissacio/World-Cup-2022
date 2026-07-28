interface Props {

    children:React.ReactNode;

    onClick?:()=>void;

}



function Button({
    children,
    onClick
}:Props){


    return (

        <button

        onClick={onClick}

        className="
        rounded-full
        bg-yellow-400
        px-8
        py-4
        text-black
        font-bold
        transition-all
        hover:scale-105
        "

        >

            {children}


        </button>

    );


}


export default Button;
