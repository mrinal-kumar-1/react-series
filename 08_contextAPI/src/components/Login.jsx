import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)
    const submitHandler = (e) => {
           e.preventDefault();
           setUser({username, password})
    }

    

    return( 
        <>
        <h1>This is a small tutorial of User Context</h1>
        <div style={{display: "flex", flexDirection: "column", maxWidth: "200px", margin: "auto"}}>
           <input type="text" 
               style={{textAlign: "center"}}
              value={username}
           onChange={(e) => setUsername(e.target.value)}
           placeholder="username" />
           <br />
           <input type="text" style={{textAlign: "center"}} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           placeholder="password" />
           <br />
           <button type="submit"
            onClick={submitHandler}
           >Log In</button>

        </div>
        </>
    )
}

export default Login