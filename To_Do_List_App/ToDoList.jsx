import React, {useState} from "react";
import styles from "../To_Do_List_App/ToDoList.module.css";

const ToDoList = () => {

    const [tasks, setTasks] = useState(["Eat breakfast"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const addTask = () => {

        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    const deleteTask = (index) => {    
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] =
             [updatedTasks[index - 1], updatedTasks[index]];
             setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] =
             [updatedTasks[index + 1], updatedTasks[index]];
             setTasks(updatedTasks);
        }
    }
    


    return (
    <div className = {styles.listContainer}>
        <h1>To Do List</h1>
        <div>
            <input 
            type = "text" 
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}/>
            <button
            className={styles.addBtn}
            onClick={addTask}>
                Add
                </button>
        </div>
        <ol>
            {tasks.map((task, index) => 
               <> <li key={index}>
                   <span className="text">{task}</span>
                </li><button className={styles.deleteBtn}
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button><button className={styles.upBtn}
                        onClick={() => moveTaskUp(index)}>
                        ☝
                    </button><button className={styles.downBtn}
                        onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                 </>
            )}
        </ol>
    </div>
    );
}

export default ToDoList;