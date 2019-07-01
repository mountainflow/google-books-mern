import React, { Component } from "react";
import Search from "../components/Search"

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
                <div className="col s12 center">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12 left">
                                    Search Results
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

export default SearchBooks