import {
    createBrowserRouter
} from "react-router-dom";


import Home from "@/pages/Home";
import Tournament from "@/pages/Tournament";



export const router = createBrowserRouter([


    {
        path:"/",
        element:<Home/>
    },


    {
        path:"/mundial",
        element:<Tournament/>
    }


]);
