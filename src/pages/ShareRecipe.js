import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ShareRecipe.css';

const ShareRecipe = () => {
    const [formData, setFormData] = useState({ title: '', description: '', ingredients: '', instructions: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/recipes', formData, {
            headers: { Authorization: localStorage.getItem('token') },
        });
        alert('Recipe Shared!');
    };

    return (
        <div className="share-container">
            <h2>Share Your Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Recipe Title" onChange={handleChange} required />
                <textarea name="description" placeholder="Description" onChange={handleChange} required />
                <textarea name="ingredients" placeholder="Ingredients (comma-separated)" onChange={handleChange} required />
                <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
                <button type="submit">Share Recipe</button>
            </form>
        </div>
    );
};

export default ShareRecipe;
