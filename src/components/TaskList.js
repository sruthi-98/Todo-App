import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import '../styles/TaskList.css';

function TaskList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = (e) => {
        if(task){
            const todo = {
                id: todos.length,
                value: task,
                checked: false
            };
    
            setTodos([...todos, todo]);
            document.querySelector('input.taskList__taskInput').value = '';
        }
    }

    const deleteTask = (id) => {
        const newTodos = todos.filter((todo) =>{
            return todo.id !== id;
        });
        console.log(newTodos);
        setTodos([...newTodos]);
    }

    const changeHandler = (id) => {
        todos.forEach((todo) => {
            if(todo.id === id) {
                todo.checked = !todo.checked;
            }
        });
        setTodos([...todos]);
    }

    const displayTasks = (checked) => {
        return todos.filter((todo) => {
            return checked === todo.checked;
        }).map((todo) => {
            return (
                <li key={todo.id} className="taskList__todoItem">
                    <label className="taskList__todoLabel">
                        <input 
                            className="taskList__checkbox"
                            id={todo.id} 
                            type="checkbox" 
                            value={todo.value} 
                            checked={todo.checked}
                            onChange={(e) => changeHandler(todo.id, e)}
                        />
                        {todo.value} 
                    </label>
                    <DeleteIcon className="taskList_deleteTask" onClick={(e) => deleteTask(todo.id, e)} />
                </li>
            );
        });
    }

    const pendingTasks = displayTasks(false);
    const completedTasks = displayTasks(true);


    return (
        <div className="taskList">
            {/* Pending Tasks */}
            <div className="taskList__section">
                {pendingTasks.length > 0 ?
                    <div className="taskList__pending">
                        <h2 className="taskList__title">Pending Tasks</h2>
                        <ul>{pendingTasks}</ul>
                    </div>
                    :
                    <h3 className="taskList__fallback">You don't have any pending tasks. Yaaaaayyyyy!!!!!!!!</h3>
                }
            </div>

            {/* Completed Tasks */}
            <div className="taskList__section">
                {completedTasks.length > 0 &&
                    <div className="taskList__completed">
                        <h2 className="taskList__title">Completed Tasks</h2>
                        <ul>{completedTasks}</ul>
                    </div>
                }
                
            </div>

            {/* Add Task section */}
            <div className="taskList__addTaskSection">
                <input 
                    className="taskList__taskInput"
                    type="text" 
                    placeholder="Enter task" 
                    onChange={e => setTask(e.target.value)}
                ></input>
                <button className="taskList__addTask" onClick={addTask}>
                    <AddIcon className="taskList__addIcon"/>
                    <span className="taskList__add">Add Task</span>
                </button>
            </div>
        </div>
    )
}

export default TaskList;
