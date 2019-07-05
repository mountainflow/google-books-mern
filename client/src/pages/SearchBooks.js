import React, { Component } from "react";
import API from "../utils/API"
import M from "materialize-css";
import Search from "../components/Search";
import Card from "../components/Card";
import SearchResult from "../components/SearchResult";
import './style.css';

class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: ""
    };

    componentDidMount() {
        // Auto initialize materialize
        M.AutoInit();
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        
    }

    render() {
        return (
            <>
                <Search
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <div className="row" >
                    <div className="col s12">
                        <div className="card">
                            <div className="card-content">
                                <div className="row">
                                    <div className="col s12 center">
                                        <SearchResult
                                            books={this.state.books}
                                            handleSavedButton={this.handleSavedButton}
                                        />
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