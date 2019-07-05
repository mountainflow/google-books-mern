import React from "react";

const SearchForm = props => {
        return (
            <div className="row" >
                <div className="col s12 center">
                    <div className="card blue-grey">
                        <div className="card-content">
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input className="validate white-text"
                                                id="searchBook"
                                                type="text"
                                                value={props.search}
                                                name="searchBook"
                                                onChange={props.handleInputChange}
                                            />
                                            <label htmfor="searchBook" className="white-text">Enter Book Name</label>
                                        </div>
                                            <button type="submit" className="btn waves-effect waves-light grey right" onClick={props.handleFormSubmit}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default SearchForm;