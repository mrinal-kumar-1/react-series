import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){


    const {user} = useContext(UserContext)

    if(!user) 
        {
            return (<div>Hey please add a user</div>)
        }
    return(
        <div>Hi I am {user.username}</div>

    )

}

export default Profile