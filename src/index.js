import React, { useState } from "react";
import { useMovieSystem } from "./useMovieSystem.js";
import ReactDom from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBar from "./SearchBar";
import MovieMenu from "./MovieMenu";
import MovieCart from "./MovieCart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Shoppies() {
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const [searchQuery, setSearchQuery, movies, setMovies] = useMovieSystem();

    const searchBar = (
        <SearchBar
            searchQuery={searchQuery}
            handleQueryChange={setSearchQuery}
            handlePageUpdate={setMovies}
            defaultSearch={"Star Wars"}
        />
    );
    const movieCart = <MovieCart />;
    const movieMenu = <MovieMenu movies={movies} searchQuery={searchQuery} />;

    return (
        <>
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Body>{movieCart}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        The Shoppies Awards
                    </Navbar.Brand>
                    <Button className="icon mr-sm-2" onClick={handleModalShow}>
                        <FontAwesomeIcon icon={faFilm} />
                        <span className="nav-counter">3</span>
                    </Button>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col sm={12} md={{ span: 6, offset: 3 }} className="mt-4">
                        {searchBar}
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6} className="mt-4">
                        {movieMenu}
                    </Col>
                    <Col className="mt-4 d-none d-lg-block">{movieCart}</Col>
                </Row>
            </Container>
        </>
    );
}

ReactDom.render(<Shoppies />, document.getElementById("root"));
