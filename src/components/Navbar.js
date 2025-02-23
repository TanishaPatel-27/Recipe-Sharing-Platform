import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Ensure you have a Navbar.css file for styling
import logo from '../assets/logo2.png';

function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Yumfinity Logo" className="logo" />
                </Link>
                <Link to="/" className="brand-name"> Yumfinity-endless recipes, infinite flavors</Link>
            </div>

            {/* Navigation Links */}
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/share-recipe">Share a Recipe</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/login" className="login-btn">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
