import React, { Component } from "react";
import Card from "../components/Card";

class SavedBooks extends Component {
    state = {
        search: "",
        books: [],
    };

    render() {
        return (
            <div className="row" >
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12 left">
                                    Saved Books
                                </div>
                                <div className="row">
                                    <div className="col s12 center">
                                        <Card />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default SavedBooks;