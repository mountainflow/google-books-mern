import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="row" >
            <div className="col s12 center">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title">Google Books</span>
                        <p>Search and Save Books you like</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;