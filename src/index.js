import React from "react";
import ReactDom from "react-dom";
import SearchBar from "./SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

function Shoppies() {
    return (
        <Container>
            <Row>
                <SearchBar></SearchBar>
            </Row>
        </Container>
    );
}

ReactDom.render(<Shoppies />, document.getElementById("root"));
