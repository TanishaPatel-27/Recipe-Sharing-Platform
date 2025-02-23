import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Yumfinity!</h1>
            <p>Endless Recipes, Infinite Flavors.</p>
            <div className="home-buttons">
                <Link to="/explore" className="btn">Explore Recipes</Link>
                <Link to="/signup" className="btn">Get Started</Link>
            </div>
        </div>
    );
};

export default Home;
