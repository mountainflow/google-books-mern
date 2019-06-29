import React from "react";

function Nav() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Google Book Search</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Search Books</a></li>
                    <li><a href="/saved">Saved Books</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;