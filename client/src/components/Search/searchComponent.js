import React, { Component } from "react";
import M from "materialize-css";
import './style.css';

class SearchForm extends Component {
    componentDidMount() {
        // Auto initialize materialize
        M.AutoInit();
    }
    render() {
        return (
            <>
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
                                                value={this.props.search}
                                                name="searchBook"
                                                onChange={this.props.handleInputChange}
                                            />
                                            <label for="searchBook" className="white-text">Enter Book Name</label>
                                        </div>
                                            <button type="submit" className="btn waves-effect waves-light grey right" onClick={this.props.handleFormSubmit}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SearchForm;