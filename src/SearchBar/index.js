import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return (
        <InputGroup>
            <FormControl
                defaultValue="Star Wars"
                aria-describedby="search-bar"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default SearchBar;
