import {useEffect, useState} from "react";
import axios from "axios";

function  Math(){
 const [exercise,setExercise] = useState({});
 const [userAnswer,setUserAnswer] = useState("");
 const [answer,setAnswer] = useState(null);


    const getExercise = async ()=>{
        const response = await axios.get("http://localhost:8080/math")
        setExercise(response.data)
        console.log(response.data)
    }

    const sendUserAnswer= async ()=>{
        const response = await axios.get("http://localhost:8080/checkResult?id="+exercise.id +"&userAnswer=" +userAnswer)
        setAnswer(response.data)
    }




    useEffect(() => {
     getExercise()
    }, []);

    const getNum2=()=>{
        return exercise.num2===null?
            <input type={"number"} value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)}/>
            :<label>{exercise.num2}</label>
    }

    const getNum3 =()=>{
        return exercise.num3===null?
            <input type={"number"} value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)}/>
            :<label>{exercise.num3}</label>
    }


const getNum1=()=>{
    return  exercise.num1 ===null?
        <input type={"number"} value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}/>
        :<label>{exercise.num1}</label>
    }

    return(
        <div>
            <h1>Math</h1>
            {getNum1()} <label>{exercise.operand}</label> {getNum2()} {exercise.operandE} {getNum3()}
            <div>
                <button onClick={sendUserAnswer}>send</button>
            </div>
            {answer !== null && <div style={{color: answer ? "green" : "red"}}>
                {answer ? <label>אתה מלך צדקת</label> : <label>טעית</label>}
            </div>}
        </div>
    )
}

export default Math;