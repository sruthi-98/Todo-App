import React, { useState } from 'react';
import axios from '../axios';

function AddTask() {
    const userId = localStorage.getItem('userId');
    const [task, setTask] = useState('');

    // Add task to database
    const addTask = () => {
        if(task){
            axios({
                method: 'patch',
                url: '/tasks/' + userId + '/new',
                data: { description: task }
            }).then(res => console.log(res))
            .catch(error => console.log(error));
                
            document.querySelector('input.taskList__taskInput').value = '';
        }
    }

    return (
        <div className="taskList__addTaskSection">
            <h2 className="taskList__title">Add Task</h2>
            <input 
                className="taskList__taskInput"
                type="text" 
                placeholder="Enter task" 
                onChange={e => setTask(e.target.value)}
            ></input>
            <button className="taskList__addTask" onClick={addTask}>
                <span className="taskList__add">Add</span>
            </button>
        </div>
    )
}

export default AddTask;
