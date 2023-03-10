import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1
                style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color:"white"
                }}
            >
            
                You got the Meal plans, we got the Recipes for you.</h1>
            <p
                style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    color:"white"
                }}
            >Make your food more delicious by following these recipes.</p>
            <Link className="link-button" to="/recipies">See random recipes</Link>
        </div>
    )
};