import React, { useState } from "react";
import { useMovieSystem } from "./useMovieSystem.js";
import ReactDom from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MovieModal from "./MovieModal";
import SearchBar from "./SearchBar";
import MovieMenu from "./MovieMenu";
import MovieCart from "./MovieCart";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Shoppies() {
    const [showNominations, setShowNominations] = useState(false);
    const closeNominationModal = () => setShowNominations(false);
    const openNominationModal = () => setShowNominations(true);
    const [loading, setLoading] = useState(true);

    const [
        searchQuery,
        setSearchQuery,
        movies,
        setMovies,
        nominatedMovies,
        nominateMovie,
        removeMovie,
        showCompletionModal,
        closeCompletionModal,
    ] = useMovieSystem();

    const searchBar = (
        <SearchBar
            searchQuery={searchQuery}
            handleQueryChange={setSearchQuery}
            handlePageUpdate={setMovies}
            defaultSearch={"Star Wars"}
            isLoading={loading}
            setLoading={setLoading}
        />
    );
    const movieMenu = (
        <MovieMenu
            searchQuery={searchQuery}
            movies={movies}
            handleNomination={nominateMovie}
            handlePageUpdate={setMovies}
            isLoading={loading}
            setLoading={setLoading}
        />
    );
    const movieCart = (
        <MovieCart
            nominatedMovies={nominatedMovies}
            handleRemoval={removeMovie}
        />
    );

    const nominatedCount = nominatedMovies.length;

    return (
        <>
            <MovieModal
                openModal={showCompletionModal}
                closeModal={closeCompletionModal}
                title="Nominations Complete!"
            >
                <p>You have successfully chosen 5 movies to be nominated!</p>

                {nominatedMovies.map((entry) => {
                    return <li>{`${entry.title} (${entry.year})`}</li>;
                })}
            </MovieModal>

            <MovieModal
                openModal={showNominations}
                closeModal={closeNominationModal}
                title=""
            >
                {movieCart}
            </MovieModal>

            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        The Shoppies Awards
                    </Navbar.Brand>
                    <Button
                        className="icon mr-sm-2"
                        onClick={openNominationModal}
                    >
                        <FontAwesomeIcon icon={faFilm} />
                        <span
                            className={`nav-counter ${
                                nominatedCount === 5
                                    ? "bg-success"
                                    : "bg-danger"
                            }`}
                        >
                            {nominatedCount}
                        </span>
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
