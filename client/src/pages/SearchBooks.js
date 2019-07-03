import React, { Component } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
    };

    render() {
        return (
            <>
                <Search />
                <div className="row" >
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s12 left">
                                        Search Results
                                </div>
                                    <div className="row">
                                        <div className="col s12 center">
                                            <Card />
                                            <Card />
                                            <Card />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }


}

export default SearchBooks;