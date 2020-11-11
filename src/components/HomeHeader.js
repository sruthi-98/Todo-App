import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

function HomeHeader() {
    const history = useHistory();

    return (
        <div className="homeHeader">
            <span className="homeHeader__title">ToDo Manager</span>
            <MenuIcon className="homeHeader__menu"></MenuIcon>
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
