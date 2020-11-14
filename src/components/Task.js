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

    // Find current item
    const findItem = (id)  => {
        const itemSelector = `li#_${id}`;
        const labelSelector = `${itemSelector} > label`;
        const taskItem = document.querySelector(itemSelector);
        const taskLabel = document.querySelector(labelSelector);
        return [taskItem, taskLabel];
    }

    // Update description of task 
    const editTask = (id) => {
        setEditClicked(true);
        const [taskItem, taskLabel] = findItem(id);
        taskItem.classList.add('taskList__todoItem--edit')
        taskLabel.contentEditable = true;
        taskLabel.focus();
    }

    // Save description of task
    const saveTask = (id) => {
        setEditClicked(false);
        const [taskItem, taskLabel] = findItem(id);
        taskItem.classList.remove('taskList__todoItem--edit')
        taskLabel.contentEditable = false;
        axios({
            method: 'patch',
            url: '/tasks/' + userId + '/update/desc/' + id,
            data: { description: taskLabel.textContent }
        }).then(res => console.log(res))
        .catch(error => console.log(error));
    }

    return (
        <li key={todo._id} id={`_${todo._id}`} className="taskList__todoItem">
            <input 
                className="taskList__checkbox"
                id={todo._id} 
                type="checkbox" 
                value={todo.description} 
                checked={todo.checked}
                onChange={(e) => toggleTaskStatus(todo._id, todo.checked, e)}
            />
            <label className="taskList__todoLabel">
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
