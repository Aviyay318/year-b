import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [isValid,setIsValid]=useState(true);
    const navigate = useNavigate();
    const [weather,setWeather]=useState({
        name:"",temprature:"",description:""
    });

    const login = async () => {
        const response = await axios.get("http://localhost:8080/login?username="+username+
        "&password="+password);
        if (response.data===false){
            setIsValid(false)
        }else {
            navigate("/");
        }
    }
    const getWeather =async () => {
        const response= await axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY")
        if (response.data!==null){
            setWeather({name:response.data.name,temprature:response.data.temprature,description:response.data.description});
        }
    }

    useEffect(()=>{
        console.log("login called");
    },[])



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
            {isValid===false&&<div style={{color:"red"}}>username or password not valid</div>}
            <button onClick={login} disabled={username.length===0||password.length===0}>login</button>

        </div>
    )
}
export default Login;