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
            <h1>Search</h1>
            </>
        )
    }


}

export default SearchBooks