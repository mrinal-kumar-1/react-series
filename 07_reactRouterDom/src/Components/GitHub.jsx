import React from "react";
import { useLoaderData } from "react-router-dom";

function GitHub(){

const data = useLoaderData()

return(
    <div className="h-full w-full rounded-md p-[20px]">
  
        <h3 className="w-full text-center font-extrabold text-4xl py-4">GitHub Profile</h3>
        <div className="flex flex-row gap-x-10 m-10 max-w-5xl">
        <div className="flex-1 border-8 border-slate-100 rounded-xl ">
            <img src={data.avatar_url} alt="Git Hub Profile pic" width="600px" className="rounded-md"/>
        </div>
            <div className="text-left bg-slate-100 rounded-xl flex flex-col gap-4 py-6 px-8 from-neutral-500 text-xl w-[600px] ">
                <p ><b>Name:</b> {data.name}</p>
                <p ><b>Id:</b> {data.id}</p>
                <p ><b>Username:</b> {data.login}</p>
                <p ><b>Bio:</b> {data.bio}</p>
                <p ><b>Followers:</b> {data.followers}</p>
            </div>
    </div>
    </div>
)

}

export const apicall = async () => {
    let response = await fetch('https://api.github.com/users/mrinal-kumar-1')
    return response.json()
}

export default GitHub
