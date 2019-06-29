import React from "react";
import "./style.css";

function Header({ children }) {
    return (
        <div className="container text-center">
            <h2>Google Books</h2>
            <h3>Search and Save Books you like</h3>
        </div>
    );
}

export default Header;