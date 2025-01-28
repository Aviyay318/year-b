import {useEffect, useState} from "react";

function Numbers(){
    const [userInput, setUserInput] = useState(0);
    const [history,setHistory] = useState([]);
    const [lower,setLower] = useState(0);
    const [upper,setUpper] = useState(0);

    const addToHistory = (historyToAdd) => {
        setHistory([...history, historyToAdd]);
    }

    useEffect(()=>{
        setLower(Math.min(...history))
        setUpper(Math.max(...history))
    },[history])




    const increment = () => {
        addToHistory(userInput)
        setUserInput((preveValue)=> preveValue + 1);

    }
    const decrement = () => {
        addToHistory(userInput)
        setUserInput((preveValue)=> preveValue - 1);
    }

    return(
        <div>
            <h1>Number</h1>
            {
                userInput===100?<h2>BOOM!</h2>: <div>
                    <button onClick={decrement}>-</button>
                    <input type={"number"} value={userInput}
                           disabled={userInput % 10 !== 0}
                           onChange={(event) => {
                               setUserInput(event.target.value);
                               addToHistory(userInput)
                           }}/>
                    <button onClick={increment}>+</button>
                    <div>
                        <button onClick={() => {
                            setUserInput(0);
                            addToHistory(userInput)
                        }}>Reset
                        </button>
                        <button onClick={() => {
                            setUserInput(Math.floor(Math.random() * 100));
                            addToHistory(userInput)
                        }}>Random
                        </button>
                    </div>
                    <ul>
                        {
                            history.length > 0 && <div>
                                {
                                    history.map((item, index) => {
                                        return (
                                            <li style={{color: item === lower ? "red" : item === upper ? "green" : "black"}}
                                                key={index}>{item}</li>
                                        )
                                    })
                                }
                            </div>}
                    </ul>
                </div>
            }
        </div>
    )

}

export default Numbers;