import React, { useState } from 'react';
import '../styles/TaskList.css';

function TaskList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = (e) => {
        const todo = {
            id: todos.length,
            value: task,
            checked: false
        };

        setTodos([...todos, todo]);
        document.querySelector('input').value = '';
    }

    const changeHandler = (id) => {
       todos[id].checked = !todos[id].checked;
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
                    <h3>You don't have any pending tasks. Yaaaaayyyyy!!!!!!!!</h3>
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
                <button className="taskList__addTask" onClick={addTask}>Add Task</button>
            </div>
        </div>
    )
}

export default TaskList;
