import React, { useState } from "react";
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

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Body>
                    <MovieCart />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar bg="primary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        The Shoppies Awards
                    </Navbar.Brand>
                    <Button className="icon mr-sm-2" onClick={handleShow}>
                        <FontAwesomeIcon icon={faFilm} />
                        <span className="nav-counter">3</span>
                    </Button>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col sm={12} md={{ span: 6, offset: 3 }} className="mt-4">
                        <SearchBar />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={6} className="mt-4">
                        <MovieMenu />
                    </Col>
                    <Col className="mt-4 d-none d-lg-block">
                        <MovieCart />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

ReactDom.render(<Shoppies />, document.getElementById("root"));
