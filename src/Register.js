import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register(){

const [name, setName] = useState("");
const [lastName,setLastName] = useState("");
const[username,setUsername] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const [isUserNameTaken, setIsUserNameTaken] = useState(false);

        const register = async ()=>{
            const response = await axios.get("http://localhost:8080/register?firstName="+name + "&lastName="+lastName
            +"&username="+username+"&password="+password);
            if (response.data.success===true){
                navigate("/login");
            }else {
                if (response.data.errorCode===1001){
                    setIsUserNameTaken(true)
                }
            }
        }


    return(
        <div>
            <h1>Register</h1>
            <div>
                <label>firstName:</label>
                <input type={"text"} value={name} onChange={(event) => setName(event.target.value)}/>
                <br/>
                <label>lastName:</label>
                <input type={"text"} value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                <br/>
                <label>username:</label>
                <input type={"text"} value={username} onChange={(event) => setUsername(event.target.value)}/>
                <br/>
                <label>password:</label>
                <input type={"password"} value={password} onChange={(event) => setPassword(event.target.value)}/>
                <br/>
                {isUserNameTaken===true&&<div style={{color:'red'}}>username taken</div>}
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Register;