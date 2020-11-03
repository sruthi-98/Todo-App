import React from 'react';
import axios from '../axios';
import DeleteIcon from '@material-ui/icons/Delete';

const userId = localStorage.getItem('userId');

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

function Task({ todo }) {
    return (
        <li key={todo._id} className="taskList__todoItem">
            <label className="taskList__todoLabel">
                <input 
                    className="taskList__checkbox"
                    id={todo._id} 
                    type="checkbox" 
                    value={todo.description} 
                    checked={todo.checked}
                    onChange={(e) => toggleTaskStatus(todo._id, todo.checked, e)}
                />
                {todo.description} 
            </label>
            <DeleteIcon className="taskList_deleteTask" onClick={(e) => deleteTask(todo._id, e)} />
        </li>
    )
}

export default Task;
