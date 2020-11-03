import React from 'react';
import { useHistory } from 'react-router-dom';

function HomeHeader() {
    const history = useHistory();

    return (
        <div className="homeHeader">
            <span>ToDo Manager</span>
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/signup')}>Sign Up</button>
        </div>
    )
}

export default HomeHeader;
