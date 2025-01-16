import {useState} from "react";

function TodoList(){

    const [tasks, setTasks] = useState([]);
    const[task, setTask] = useState("");

    const addTask=()=>{
        setTasks((prevTasks) => [...prevTasks, task]);
        setTask("");
    }
     const deleteTask=(taskToRemove)=>{
        setTasks((prevTasks) => prevTasks.filter(task => task !== taskToRemove));
     }

    return(
        <div>
            <h1>TodoList</h1>
            <input type={"text"}
            value={task}
                   onChange={(event) => setTask(event.target.value)}
            />
            <br/>
            <button disabled={task.length===0} onClick={addTask}>Add task</button>
            <div>
                {tasks.length===0?<div>no task to do</div>:
                    <div>
                        {tasks.map((task, index) => {
                            return (
                                <div onClick={()=>deleteTask(task)}>{task}</div>
                            )
                        } )
}                    </div>}
            </div>
        </div>
    )
}export default TodoList;