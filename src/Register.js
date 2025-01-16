import {useEffect, useState} from "react";

function Register(){
    const[number,setNumber]=useState(55)
    const [timer,setTimer]=useState(0)


    useEffect(() => {
      const intervalId = setInterval(()=>{
            setTimer((prevTimer) => prevTimer + 1)
       },1000)

       return () => clearInterval(intervalId)

    }, []);





    function plus(){
        if (number<200){
            setNumber(number+1)
        }
    }
 const minus=()=>{
   if (number>50){
       setNumber(number-1)
   }
 }

    return(
        <div>
            <h1>Register</h1>

            <input
            value={number}
            type={"number"}
            />
          <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
          <div>
              {timer}
          </div>

        </div>
    )
}
export default Register;