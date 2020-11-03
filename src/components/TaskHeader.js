import React from 'react';
import { useHistory } from 'react-router-dom';

function TaskHeader() {
    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem('userId');
        history.push('/');
    }

    return (
        <div className="taskHeader">
            <span>ToDo Manager</span>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default TaskHeader;
