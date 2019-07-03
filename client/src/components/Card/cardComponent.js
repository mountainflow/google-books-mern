import React from 'react';
import "./style.css";

function Card() {
    return (
        <div className="row" >
            <div className="col s12 center">
                <div className="card blue-grey">
                    <div className="card-content white-text">
                        <span className="card-title">Card Title</span>
                        <p>this is a card</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Card;