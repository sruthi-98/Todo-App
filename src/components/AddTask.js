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
        <div className="taskList__section">
            <h2 className="taskList__title">Add Task</h2>
            <div className="taskList__addTaskSection">
                <input 
                    className="taskList__taskInput"
                    type="text" 
                    placeholder="Enter task" 
                    onChange={e => setTask(e.target.value)}
                ></input>
                <button className="taskList__add" onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default AddTask;
