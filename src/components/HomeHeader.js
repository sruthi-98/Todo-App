import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';

function HomeHeader() {
    const history = useHistory();
    const [menuClicked, setMenuClicked] = useState(false);

    const showMenu = (condition) => {
        setMenuClicked(condition);
        const nav = document.getElementsByClassName('homeHeader__nav')[0];
        nav.style.display = condition ? 'block' : 'none';
    }

    return (
        <div className="homeHeader">
            <div className="homeHeader__section">
                <span className="homeHeader__title">ToDo Manager</span>
                {!menuClicked ?
                    <MenuIcon className="homeHeader__menu" onClick={(e) => showMenu(true, e)}></MenuIcon> :
                    <CloseIcon className="homeHeader__close" onClick={(e) => showMenu(false, e)}></CloseIcon>
                }
                
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
