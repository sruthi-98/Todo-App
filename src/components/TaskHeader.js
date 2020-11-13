import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

function TaskHeader() {
    const history = useHistory();
    const name = localStorage.getItem('name');

    const logOut = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        history.push('/');
    }

    return (
        <div className="taskHeader">
            <div className="taskHeader__section">
                <span className="taskHeader__title">ToDo Manager</span>
                <span className="taskHeader__name">Hello, {name}</span>
                <ExitToAppIcon className="taskHeader__exit" onClick={logOut}></ExitToAppIcon>
            </div>
        </div>
    )
}

export default TaskHeader;
