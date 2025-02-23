import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Explore from './pages/Explore';
import ShareRecipe from './pages/ShareRecipe';
import Account from './pages/Account';
import './styles/App.css'; // Main styling file

function App() {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/share-recipe" element={<ShareRecipe />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
