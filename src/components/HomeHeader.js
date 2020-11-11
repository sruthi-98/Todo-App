import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

function HomeHeader() {
    const history = useHistory();
    const [menuClicked, setMenuClicked] = useState(false);

    return (
        <div className="homeHeader">
            <div className="homeHeader__section">
                <span className="homeHeader__title">ToDo Manager</span>
                <MenuIcon className="homeHeader__menu"></MenuIcon>
            </div>
            <nav className="homeHeader__nav">
                <button 
                    className="homeHeader__login"
                    onClick={() => history.push('/login')}
                >
                    Login
                </button>
                <button 
                    className="homeHeader__signup"
                    onClick={() => history.push('/signup')}
                >
                    Sign Up
                </button>
            </nav>
        </div>
    )
}

export default HomeHeader;
