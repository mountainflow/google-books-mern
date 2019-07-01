import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div className="nav-wrapper blue-grey">
                <Link to="/" className="brand-logo">Google Book Search</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/">Search Books</Link></li>
                    <li><Link to="/saved">Saved Books</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;