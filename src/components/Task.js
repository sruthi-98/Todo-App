import React, { useState } from 'react';
import axios from '../axios';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

function Task({ todo }) {
    const userId = localStorage.getItem('userId');
    const [editClicked, setEditClicked] = useState(false);

    // Delete task
    const deleteTask = (id) => {
        axios({
            method: 'delete',
            url: '/tasks/' + userId + '/delete/' + id,
        }).then(res => console.log(res))
        .catch(error => console.log(error));
    }

    // Update status of task
    const toggleTaskStatus = (id, checked) => {
        axios({
            method: 'patch',
            url: '/tasks/' + userId + '/update/' + id,
            data: { checked: !checked }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
    }

    // Update description of task 
    const editTask = (id) => {
        setEditClicked(true);
        const selector = `label#_${id}`;
        const taskLabel = document.querySelector(selector);
        taskLabel.contentEditable = true;
    }

    // Save description of task
    const saveTask = (id) => {
        setEditClicked(false);
        const selector = `label#_${id}`;
        const taskLabel = document.querySelector(selector);
        taskLabel.contentEditable = false;
        axios({
            method: 'patch',
            url: '/tasks/' + userId + '/update/desc/' + id,
            data: { description: taskLabel.textContent }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
    }

    return (
        <li key={todo._id} className="taskList__todoItem">
            <input 
                className="taskList__checkbox"
                id={todo._id} 
                type="checkbox" 
                value={todo.description} 
                checked={todo.checked}
                onChange={(e) => toggleTaskStatus(todo._id, todo.checked, e)}
            />
            <label id={`_${todo._id}`} className="taskList__todoLabel">
                {todo.description} 
            </label>
            {!editClicked ? 
                <EditIcon className="taskList__edit" onClick={(e) => editTask(todo._id, e)}/> :
                <SaveIcon className="taskList__save" onClick={(e) => saveTask(todo._id, e)}/>
            }
            <DeleteIcon className="taskList__delete" onClick={(e) => deleteTask(todo._id, e)} />
        </li>
    )
}

export default Task;
