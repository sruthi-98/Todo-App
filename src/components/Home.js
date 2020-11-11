import React from 'react';
import HomeHeader from './HomeHeader';

function Home() {
    return (
        <div className="home">
            <HomeHeader />
            <h1 className="home__mainHeading">Organize with us</h1>
            <button className="home__button">Get Started</button>
        </div>
    )
}

export default Home;
