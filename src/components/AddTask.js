import React, { useState } from 'react';
import axios from '../axios';
import AddIcon from '@material-ui/icons/Add';

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
    )
}

export default AddTask;
