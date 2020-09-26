import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from '../axios';
import '../styles/TaskList.css';

function TaskList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    // Get task data from database
    useEffect(() => {
        axios({
            method: 'get',
            url: '/tasks',
        }).then((res) => setTodos(res.data))
          .catch(error => console.log(error));
    }, [todos]);

    // Add task to database
    const addTask = () => {
        if(task){
            axios({
                method: 'post',
                url: '/tasks/new',
                data: { description: task }
            }).then(res => console.log(res))
              .catch(error => console.log(error));
                
            document.querySelector('input.taskList__taskInput').value = '';
        }
    }

    // Delete task
    const deleteTask = (id) => {
        axios({
            method: 'delete',
            url: '/tasks/delete/' + id,
        }).then(res => console.log(res))
          .catch(error => console.log(error));
    }

    // Update status of task
    const changeHandler = (id) => {
        axios({
            method: 'patch',
            url: '/tasks/update/' + id,
            data: { checked: true }
        }).then(res => console.log(res))
          .catch(error => console.log(error));
    }

    // Display tasks based on status
    const displayTasks = (checked) => {
        return todos.filter((todo) => {
            return checked === todo.checked;
        }).map((todo) => {
            return (
                <li key={todo._id} className="taskList__todoItem">
                    <label className="taskList__todoLabel">
                        <input 
                            className="taskList__checkbox"
                            id={todo._id} 
                            type="checkbox" 
                            value={todo.description} 
                            checked={todo.checked}
                            onChange={(e) => changeHandler(todo._id, e)}
                        />
                        {todo.description} 
                    </label>
                    <DeleteIcon className="taskList_deleteTask" onClick={(e) => deleteTask(todo._id, e)} />
                </li>
            );
        });
    }

    // Groups tasks to pending and completed
    const pendingTasks = displayTasks(false);
    const completedTasks = displayTasks(true);


    return (
        <div className="taskList">
            {/* Pending Tasks */}
            <div className="taskList__section">
                {pendingTasks.length > 0 ?
                    <div className="taskList__pending">
                        <h2 className="taskList__title">Pending Tasks</h2>
                        <ul className="taskList__list">{pendingTasks}</ul>
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
                        <ul className="taskList__list">{completedTasks}</ul>
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
