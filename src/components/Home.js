import React from 'react';
import '../styles/Home.css';
import HomeHeader from './HomeHeader';

function Home() {
    return (
        <div className="home">
            <HomeHeader />
            <h1>Organize with us</h1>
            <button>Get Started</button>
        </div>
    )
}

export default Home;
