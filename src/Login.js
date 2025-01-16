import {useState} from "react";

function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    return(
        <div>
            <h1>Login</h1>
            <input
                type={"text"}
                value={username}
                placeholder={"username"}
                onChange={(event) => setUsername(event.target.value)}
            />
            <br/>
            {username.length===0&&<label>
                please enter username
            </label>}
            <br/>
            <input type={"password"}
                   placeholder={"password"}
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}
            />
            <br/>
            {password.length===0&&<label>
                please enter password
            </label>}
            <br/>
            <button disabled={username.length===0||password.length===0}>login</button>

        </div>
    )
}
export default Login;