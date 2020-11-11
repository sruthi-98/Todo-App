import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';

function TaskHeader() {
    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem('userId');
        history.push('/');
    }

    return (
        <div className="taskHeader">
            <div className="taskHeader__section">
                <span className="taskHeader__title">ToDo Manager</span>
                <ExitToAppIcon className="taskHeader__exit" onClick={logOut}></ExitToAppIcon>
            </div>
        </div>
    )
}

export default TaskHeader;
