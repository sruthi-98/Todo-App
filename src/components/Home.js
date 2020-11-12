import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeHeader from './HomeHeader';

function Home() {
    const history = useHistory();

    return (
        <div className="home">
            <HomeHeader />
            <div className="home__section">
                <h1 className="home__mainHeading">Organize with us</h1>
                <span className="home__subHeading">A task manager you can rely on</span>
                <button className="home__button" onClick={() => history.push('/signup')}>Get Started</button>
            </div>
            <img className="home__image" src={require('../images/todo.svg')} alt="Todo" />
        </div>
    )
}

export default Home;
