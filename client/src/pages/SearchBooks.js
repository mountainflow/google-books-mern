import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";


class SearchBooks extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Find All of Your Favorite Books with Google Book Search</h1>
                </Jumbotron>
            </Container>
        )
    }


}

export default SearchBooks