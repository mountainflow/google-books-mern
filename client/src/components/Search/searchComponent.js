import React from "react";

const SearchForm = props => {
    return (
        <div className="row" >
            <div className="col s12 center">
                <div className="card blue-grey">
                    <div className="card-content white-text">

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
                                        <label for="searchBook">Enter Book Name</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn waves-effect waves-light" onClick={props.handleFormSubmit}>Submit</button>
                            </form>
                        </div>


                        {/* <form>
                            <div className="form-group">
                                <label className="BookSearchLabel white-text"><h3>Search For A Book</h3></label>
                                <br></br>
                                <input className="col s12 form-control"
                                    value={props.search}
                                    type="text"
                                    name="searchBook"
                                    placeholder="Enter Book's Name"
                                    onChange={props.handleInputChange}
                                />
                            </div>
                            <button type="submit" className="btn waves-effect waves-light" onClick={props.handleFormSubmit}>Submit</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SearchForm