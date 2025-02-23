import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Explore.css";

const Explore = () => {
    const [recipes, setRecipes] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/recipes?page=${page}&limit=9`);
                setRecipes((prev) => [...prev, ...res.data]); // Append new data
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };
        fetchRecipes();
    }, [page]);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="explore-container">
            <h2>Explore Recipes</h2>
            <div className="recipe-grid">
                {recipes.length === 0 ? (
                    <p>No recipes available.</p>
                ) : (
                    recipes.map((recipe) => (
                        <div className="recipe-card" key={recipe._id}>
                            <img src={`/assets/${recipe.image}`} alt={recipe.title} />
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Explore;
