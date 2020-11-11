import React from 'react';
import HomeHeader from './HomeHeader';

function Home() {
    return (
        <div className="home">
            <HomeHeader />
            <h1 className="home__mainHeading">Organize with us</h1>
            <span className="home__subHeading">A task manager you can rely on</span>
            <button className="home__button">Get Started</button>
            <img className="home__image" src={require('../images/todo.svg')} alt="Todo" />
        </div>
    )
}

export default Home;
