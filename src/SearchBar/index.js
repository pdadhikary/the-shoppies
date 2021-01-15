import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { getMovieList } from "../movieService.js";

function SearchBar({
    searchQuery,
    defaultSearch,
    handleQueryChange,
    handlePageUpdate,
}) {
    useEffect(() => {
        handleQueryChange(defaultSearch);
        getMovieList((newMovies) => {
            handlePageUpdate(newMovies);
        }, defaultSearch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Searching "${searchQuery}"...`);
        handleQueryChange(searchQuery);
        getMovieList((newMovies) => {
            handlePageUpdate(newMovies);
        }, searchQuery);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <FormControl
                    value={searchQuery}
                    onChange={(e) => {
                        handleQueryChange(e.target.value);
                    }}
                    aria-describedby="search-bar"
                />
                <InputGroup.Append>
                    <Button
                        variant="outline-secondary"
                        type="subimit"
                        onClick={handleSubmit}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
}

export default SearchBar;
