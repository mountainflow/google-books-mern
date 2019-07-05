import React from "react";

const SearchResult = props => {
    console.log(props.books);
    return (props.books.length === 0) ? (
        <div className="left">
            <h3>Search Results</h3>
        </div>
    ) : (
            <div>
                <h3>Search Results</h3>
                {props.books.map(book => {
                    return (
                        <li>
                            <div className="row" id={book.title + "Card"} key={book._id}>

                                <div className="col s3">
                                    <img src={book.image} alt={book.title} />
                                </div>
                               
                                <div className="col s9">
                                    <div>
                                        <h3>{book.title}</h3>
                                    </div>
                                    <div>
                                        <h4>{book.author}</h4>
                                    </div>
                                    <div>
                                        <p>{book.description}</p>
                                    </div>
                                </div>

                            </div>
                            <br></br>
                            <div className="">
                                <button className="btn waves-effect" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                    Save Book
                                        </button>
                                <a href={book.link} target="_blank">
                                    <button className="btn waves-effect">
                                        View Book
                                        </button>
                                </a>
                            </div>
                        </li>
                    );
                })}
            </div>
        )
}
export default SearchResult