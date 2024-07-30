import React from "react";
import { useParams } from "react-router-dom";

function MyParams(){

    const {userid} = useParams()
    return(
            <div className="h-full w-full bg-slate-200 rounded-md flex p-[250px]">
                <div className="m-auto justify-center content-center  text-5xl font-extrabold">Params Value : {userid}

                </div>
                </div>
    )
}

export default MyParams;